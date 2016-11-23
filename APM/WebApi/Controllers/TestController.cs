using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class TestController : ApiController
    {
        //[Route("api/test")]
        public TestDto GetTestData()
        {
            return new TestDto {TestString = "Test"};
        }

        public class TestDto
        {
            public string TestString { get; set; }
        }
    }
}
