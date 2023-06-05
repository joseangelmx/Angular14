using Inventario.Entities.Inventories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.DataAccess.Repositories
{
    public interface IRepository
    {
        IQueryable<Product> GetAll();
        Task<Product> GetAsync(string id);
        Task<Product> AddAsync(Product entity);
        Task<Product> UpdateAsync(Product entity);
        Task DeleteAsync(string id);
    }
}
