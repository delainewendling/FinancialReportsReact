using System;
using System.Linq;
using BangazonWeb.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace FinancialReports.Controllers
{
    [Route("[controller]")]
    [Produces("application/json")]
    public class TimelyReportsController : Controller
    {
        private BangazonWebContext context;
        public TimelyReportsController(BangazonWebContext ctx)
        {
            context = ctx;
        }
        // GET
        [HttpGet("{days}")]
        //IActionResult is implemented by classes containing methods that can operate asynchronously.  
        public IActionResult Get([FromRoute] int days)
        {
            IQueryable<object> productList = from prod in context.Product 
                           join li in context.LineItem 
                           on prod.ProductId equals li.ProductId
                           join ord in context.Order
                           on li.OrderId equals ord.OrderId
                           where ord.DateCompleted > DateTime.Now.AddDays(-days)
                           orderby prod.Name.ToUpper()
                           select new 
                           {
                               prod.ProductId,
                               prod.Name,
                               prod.Price,
                               ord.DateCompleted
                           };
            if (productList == null)
            {
                return NotFound();
            }
            return Ok(productList);
        }

        // GET api/values/5
        // [HttpGet("{id}")]
        // public string Get(int id)
        // {
        //     return "value";
        // }

        // // POST api/values
        // [HttpPost]
        // public void Post([FromBody]string value)
        // {
        // }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody]string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
