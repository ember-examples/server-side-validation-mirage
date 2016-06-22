import Response from 'ember-cli-mirage/response';

export default function() {

  this.namespace = '/api';

  this.post('registrations', function(schema, request) {
   let attrs = JSON.parse(request.requestBody).data.attributes;

   if ( attrs.firstname === 'John') {
     return {
       'id': 1,
       'firstname': 'John',
       'lastname': attrs.lastname
     }
   } else {
     return new Response(422, {}, {
        "errors": [
          {
            "source": { "pointer": "/data/attributes/firstname"},
            "detail": "Please enter John as name"
          }
        ]}
     );
   }
  });
}
