using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.Entities.Inventories
{
    public class Product
    {
        [Key]
        public string? Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string? Brand { get; set; }

        [Required]
        public string? Model { get; set; }

        [Required]
        public bool Status { get; set; }
    }
}
