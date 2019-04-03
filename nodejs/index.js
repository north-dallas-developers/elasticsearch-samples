var request = require('request');

const url = "https://search-nddg-elasticsearch-fun-tofdyfevowxw3uvg6jyaml5brq.us-west-2.es.amazonaws.com/dev-";
const yourIdentifier = 'your-name';
const postPayload = { 'name': 'Fred', 'message': 'Spiffy' }

function post() {
    const options = {
      url: url + yourIdentifier + '/doc',
      method: 'POST',
      json: postPayload
    }
    
    request(options,
        function (error, response, body) {
            if (!error && response.statusCode == 201) {
                console.log(body);
            }
            else {
                console.log('Something bad happened.', error, response);
            }
        }
    );
}

function get() {
    request.get(
        url + yourIdentifier + '/_search',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
            else {
                console.log('Something bad happened.', error, response);
            }
        }
    );
}

function postComplexRequest() {
  const url = "https://search-nddg-elasticsearch-fun-tofdyfevowxw3uvg6jyaml5brq.us-west-2.es.amazonaws.com/bank/_search";
  
  let q = {
    "query": {
      "bool": {
        "must": [
          { "range": 
            { "balance": { "gte": "49000" } }
          }
        ]
      }
    }
  };

  const options = {
    url: url,
    method: 'POST',
    json: q
  }

  request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
              body.hits.hits.forEach((x) => console.log(x));
          }
          else {
              console.log('Something bad happened.', error, response);
          }
      }
  );
}


//post();
get();
//postComplexRequest();
