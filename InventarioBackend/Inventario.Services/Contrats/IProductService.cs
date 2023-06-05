using Inventario.Entities.Dtos.Inventories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.Services.Contrats
{
    public interface IProductService
    {
        Task<List<ProductDto>> GetProductsAsync();

        Task<string> AddProductAsync(ProductDto productDto);

        Task DeleteProductAsync(string id);

        Task EditProductAsync(string id, EditProductDto productDto);

        Task<ProductDto> GetProductAsync(string id);
    }
}
