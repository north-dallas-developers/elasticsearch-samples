import ssl;
from urllib import request, parse
import json


url = "https://search-nddg-elasticsearch-fun-tofdyfevowxw3uvg6jyaml5brq.us-west-2.es.amazonaws.com/dev-"
your_identifier = "eric-sowell"
post_payload = { 'name': 'Bob', 'message': 'What is this now?' }
    
def post():
    ssl._create_default_https_context = ssl._create_unverified_context

    req =  request.Request(url + your_identifier + '/doc')
    req.add_header('Content-Type', 'application/json; charset=utf-8')

    jsondata = json.dumps(post_payload)
    jsondataasbytes = jsondata.encode('utf-8')
    req.add_header('Content-Length', len(jsondataasbytes))
    
    resp = request.urlopen(req, jsondataasbytes)

    print(resp.read().decode('utf-8')) 
    
def get():
    ssl._create_default_https_context = ssl._create_unverified_context

    req =  request.Request(url + your_identifier + '/_search')
    resp = request.urlopen(req)

    print(resp.read().decode('utf-8'))
    
# post()
get()