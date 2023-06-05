using Inventario.Entities.Dtos.Inventories;

namespace Inventario.Api.Responses
{
    public class ProductListResponse
    {
        public bool HasError { get; set; }
        public string Message { get; set; }
        public List<ProductDto> Model { get; set; }
        public string RequestId { get; set; }
    }
}
