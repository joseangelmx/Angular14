using Inventario.Api.Responses;
using Inventario.Entities.Dtos.Inventories;
using Inventario.Services.Contrats;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Inventario.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class ProductController : ControllerBase
    {
        public readonly IProductService _productService;

        public ProductController(IProductService productService) 
        {
            _productService = productService;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public async Task<ProductListResponse> Get()
        {
            //return ok(await _productService.GetProductsAsync());
            return new ProductListResponse
            {
                HasError = false,
                Message = "List of products returned",
                Model = await _productService.GetProductsAsync(),
                RequestId = System.Diagnostics.Activity.Current?.Id
            };
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public async Task<ProductResponse> Get(string id)
        {
            //return await _productService.GetProductAsync(id);
            return new ProductResponse
            {
                HasError = false,
                Message = "Product Returned",
                Model = await _productService.GetProductAsync(id),
                RequestId = System.Diagnostics.Activity.Current?.Id
            };
        }

        // POST api/<ProductController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProductDto value)
        {
            
            if (ModelState.IsValid)
            {
                await _productService.AddProductAsync(value);
                return Ok(new
                {
                    hasError = false,
                    message = "Product Registered",
                    model = await _productService.GetProductsAsync(),
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
            else
            {
                return BadRequest(new
                {
                    hasError = true,
                    message = "Bad Request",
                    model = new { title = "Bad Request", message = "Your request is incorrect, verify it" },
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] EditProductDto value)
        {
            
            if (ModelState.IsValid)
            {
                await _productService.EditProductAsync(id, value);
                return Ok(new
                {
                    hasError = false,
                    message = "Product Updated",
                    model = await _productService.GetProductsAsync(),
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
            else
            {
                return BadRequest(new
                {
                    hasError = true,
                    message = "Bad Request",
                    model = new { title = "Bad Request", message = "Your request is incorrect, verify it" },
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            
            if (ModelState.IsValid)
            {
                await _productService.DeleteProductAsync(id);
                return Ok(new
                {
                    hasError = false,
                    message = "Product Deleted",
                    model = await _productService.GetProductsAsync(),
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
            else
            {
                return BadRequest(new
                {
                    hasError = true,
                    message = "Bad Request",
                    model = new { title = "Bad Request", message = "Your request is incorrect, verify it" },
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
        }
    }
}
