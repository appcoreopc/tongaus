using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace driverapi.Controllers
{
   public class Driver  : ControllerBase {  

        [HttpGet]
        public async Task<IActionResult> GetDriver() {

            return await Task.FromResult(Ok());
        }

       ∏[HttpGet]
        public async Task<IActionResult> GetDriverList(string query, int start, int end) {

            return await Task.FromResult(Ok());
        }


        [HttpPost]
       public async Task<IActionResult> UpateDriver() {

            return await Task.FromResult(new AcceptedResult());
       }


      [HttpDelete]
       public async Task<ActionResult> DeleteDriver() {

           return await Task.FromResult(new AcceptedResult());   
       }

    }
}