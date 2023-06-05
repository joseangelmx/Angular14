using Inventario.Entities.Dtos.Inventories;

namespace Inventario.Api.Responses
{
    public class ProductResponse
    {
        public bool HasError { get; set; }
        public string Message { get; set; }
        public ProductDto Model { get; set; }
        public string RequestId { get; set; }
    }
}
