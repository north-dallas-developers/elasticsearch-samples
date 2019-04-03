using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace dotnetcore
{
    class Program
    {
        private const string Url = "https://search-nddg-elasticsearch-fun-tofdyfevowxw3uvg6jyaml5brq.us-west-2.es.amazonaws.com/dev-";
        private const string YourIdentifier = "eric-sowell";

        static async Task Main(string[] args)
        {
            await GetData();
            //await PostData();
        }

        static async Task GetData()
        {
            var client = new HttpClient();
            var response = await client.GetAsync(Url + YourIdentifier + "/_search");
            var responseString = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseString);
        }

        static async Task PostData()
        {
            var client = new HttpClient();
            var json = JsonConvert.SerializeObject(new { name = "Eric", message = "Hello from .NET Core!" });
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(Url + YourIdentifier + "/doc", content);
            var responseString = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseString);
        }
    }
}
