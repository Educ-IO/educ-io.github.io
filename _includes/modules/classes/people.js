People = (options, factory) => {
  "use strict";

  /* <!-- MODULE: Provides an interface to provide common functionality --> */
  /* <!-- PARAMETERS: Receives the global app context --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore | App Scope: Display --> */

  /* <!-- Internal Constants --> */
  const DEFAULTS = {},
        FN = {};
  /* <!-- Internal Constants --> */

  /* <!-- Internal Options --> */
  options = _.defaults(options ? _.clone(options) : {}, DEFAULTS);
  /* <!-- Internal Options --> */

  /* <!-- Internal Variables --> */
  var ರ‿ರ = {
    cache: {},
    guardians: {}
  }; /* <!-- State --> */
  /* <!-- Internal Variables --> */

  /* <!-- Internal Functions --> */
  FN.person = key => ರ‿ರ.cache[key] !== undefined ? 
    Promise.resolve(ರ‿ರ.cache[key]) : 
    factory.Google.classrooms.person(key).catch(() => null).then(person => ರ‿ರ.cache[key] = person);
  
  FN.guardian = key => ರ‿ರ.guardians[key] !== undefined ? 
    Promise.resolve(ರ‿ರ.guardians[key]) : 
    factory.Google.classrooms.guardians(key)
      .catch(() => null)
      .then(guardians => (ರ‿ರ.guardians[key] = guardians && guardians.length > 0 && guardians[0] ? guardians : null));
  
  FN.generic = (list, property, output, singular, plural, action) => {
    var processed = 0;
    return Promise.all(_.map(_.chain(list).pluck(property).compact().uniq().value(), id => FN.person(id)
                             .then(person => (singular && plural ? factory.Main.event(options.functions.events.load.progress, 
                                 factory.Main.message(processed += 1, singular, plural, action || "processed")) : null, person))))
      .then(people => {
        _.each(people, person => person && person.name ? 
                _.chain(list).filter(value => value[property] == person.id).each(value => value[output] = {
                  id : person.id,
                  text : person.name.fullName,
                }) : null);
        return list;
      });
  };
  
  FN.process = people => (_.each(_.isArray(people) ? people : [people], 
                                person => person.userId ? ರ‿ರ.cache[person.userId] = person.profile : ರ‿ರ.cache[person.id] = person), people);
  
  FN.simple = people => _.reduce(people, (memo, person) => (person && person.profile ? memo.push(person.profile.name.fullName) : null, memo), []);
  
  FN.list = (people, parent, type, removable) => _.reduce(people, (memo, person) => {
            if (person && person.profile) memo.push({
              id : person.profile.id,
              text : person.profile.name.fullName,
              parent : parent,
              type : type,
              title: "Remove this Person from the Class",
              $removable : removable
            });
            return memo;
          }, []);
  /* <!-- Internal Functions --> */
  
  /* <!-- Public Functions --> */
  FN.classes = classrooms => FN.generic(classrooms, "ownerId", "owner", "owner", "owners", "retrieved");
  
  FN.posts = posts => FN.generic(posts, "creatorUserId", "creator");
  
  FN.guardians = students => {
    var _students = _.isArray(students) ? students : [students];
    return Promise.all(_.map(_.chain(_students).pluck("userId").compact().uniq().value(), student => FN.guardian(student)
      .then(guardians => guardians ? _.chain(_students).filter(value => value.userId == student).each(value => value.guardians = guardians) : false)))
      .then(() => students);
  };
  
  FN.teachers = classrooms => {
    var processed = 0;
    return Promise.all(_.map(_.isArray(classrooms) ? classrooms : [classrooms], 
    classroom => factory.Google.classrooms.classroom(classroom.$id || classroom.id).teachers().list()
          .then(teachers => (
            factory.Main.event(options.functions.events.load.progress, 
                               factory.Main.message(processed += 1, "class", "classes", "processed")),
            teachers
          ))
          .then(FN.process)
          .then(teachers => (
            classroom.$teachers = teachers,
            classroom.$$teachers = FN.simple(teachers),
            classroom.teachers = FN.list(teachers, classroom.$id || classroom.id, "teacher", true), 
            teachers
          ))
          .catch(e => (factory.Flags.error("Teachers Error", e), null)))).then(() => classrooms);
  };
  
  FN.students = (classrooms, guardians) => Promise.all(_.map(_.isArray(classrooms) ? classrooms : [classrooms], 
    classroom => factory.Google.classrooms.classroom(classroom.$id || classroom.id).students().list()
          .then(options.functions.people.process)
          .then(students => guardians && classroom.guardians ? options.functions.people.guardians(students) : students)
          .then(students => (
            classroom.$students = students,
            classroom.$$students = FN.simple(students),
            classroom.students = FN.list(students, classroom.$id || classroom.id, "student", true),
            students
          ))
          .catch(e => (factory.Flags.error("Students Error", e), null)))).then(() => classrooms);
  /* <!-- Public Functions --> */

  /* <!-- Initial Calls --> */

  /* <!-- External Visibility --> */
  return {
    
    classes : FN.classes,
    
    guardians : FN.guardians,
    
    posts : FN.posts,
    
    teachers : FN.teachers,
    
    students : FN.students,
    
  };
  /* <!-- External Visibility --> */

};