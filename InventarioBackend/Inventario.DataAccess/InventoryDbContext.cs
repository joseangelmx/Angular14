using Inventario.Entities.Inventories;
using Inventario.Entities.Users;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.DataAccess
{
    public class InventoryDbContext : IdentityDbContext
    {
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }

        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options)
        {

        }
    }
}
