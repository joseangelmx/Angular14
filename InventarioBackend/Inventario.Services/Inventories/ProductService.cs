using AutoMapper;
using Inventario.DataAccess.Repositories;
using Inventario.Entities.Dtos.Inventories;
using Inventario.Entities.Inventories;
using Inventario.Services.Contrats;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.Services.Inventories
{
    public class ProductService : IProductService
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public ProductService(IRepository repository, IMapper mapper)
        { 
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<string> AddProductAsync(ProductDto productDto)
        {
            bool productExists = await _repository.GetAsync(productDto.Id) == null ? false : true;
            if (productExists) {
                throw new Exception("This product ID exists");
            }
            Product product = _mapper.Map<Product>(productDto);
            await _repository.AddAsync(product);
            return product.Id;
        }

        public async Task DeleteProductAsync(string id)
        {
            bool productExists = await _repository.GetAsync(id) == null ? false : true;
            if (!productExists)
            {
                throw new Exception("This product does not exists");
            }
            await _repository.DeleteAsync(id);
        }

        public async Task EditProductAsync(string id, EditProductDto productDto)
        {
            bool productExists = await _repository.GetAsync(id) == null ? false : true;
            if (!productExists)
            {
                throw new Exception("This product does not exists");
            }
            Product product = _mapper.Map<Product>(productDto);
            product.Id = id;
            await _repository.UpdateAsync(product);
        }

        public async Task<List<ProductDto>> GetProductsAsync()
        {
            return _mapper.Map<List<ProductDto>>(await _repository.GetAll().ToListAsync());
        }

        public async Task<ProductDto> GetProductAsync(string id)
        {
            return _mapper.Map<ProductDto>(await _repository.GetAsync(id));
        }

    }
}
