using Inventario.Entities.Inventories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.DataAccess.Repositories
{
    public class ProductRepository : IRepository
    {
        private readonly InventoryDbContext _context;

        public ProductRepository(InventoryDbContext context) 
        {
            _context = context;
        }

        public async Task<Product> AddAsync(Product entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException($"{nameof(entity)} entity must not be null");
            }

            try
            {
                await _context.Products.AddAsync(entity);
                await _context.SaveChangesAsync();

                return entity;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(entity)} could not be saved: {ex.Message}");
            }
        }

        public async Task DeleteAsync(string id)
        {
            Product entity = await _context.Products.FindAsync(id);

            entity.Status = false;
            await _context.SaveChangesAsync();
        }

        public IQueryable<Product> GetAll()
        {
            try
            {
                return _context.Products;
            }
            catch (Exception ex)
            {
                throw new Exception($"Couldn't retrieve entities: {ex.Message}");
            }
        }

        public async Task<Product> GetAsync(string id)
        {
            var entity = await _context.Products.FindAsync(id);
            return entity;
        }

        public async Task<Product> UpdateAsync(Product entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException($"{nameof(entity)} entity must not be null");
            }

            try
            {
                var product = await _context.Products.FindAsync(entity.Id);
                product.Name = entity.Name;
                product.Quantity = entity.Quantity;
                product.Price = entity.Price;
                product.Brand = entity.Brand;
                product.Model = entity.Model;
                product.Status = entity.Status;

                await _context.SaveChangesAsync();

                return entity;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(entity)} could not be updated: {ex.Message}");
            }
        }
    }
}
