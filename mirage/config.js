import Response from 'ember-cli-mirage/response';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

 this.post('registrations', () => {
  // return {
  //   errors: {
  //     'firstname': ['Must be present'],
  //     'lastname': ['Numbers are not allowed']
  //   }
  // };

  return new Response(422, {},
    {
      "errors": [
        {
          "source": { "pointer": "/data/attributes/firstname"},
          "title": "Name is too short",
          "detail": "We enforce long names"
        }
      ]
    }
  );

  // return new Response(200, {"header": "two"}, {
  //  "data": {
  //    "type": 'registration',
  //    "id": 1,
  //    "attributes": {
  //      "firstname": 'Mark',
  //      "lastname": 'Stone'
  //    }
  //  }
  // });

 });
}
