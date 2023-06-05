using AutoMapper;
using AutoMapper.Execution;
using Inventario.Entities.Dtos.Inventories;
using Inventario.Entities.Dtos.Users;
using Inventario.Entities.Inventories;
using Inventario.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventario.Services.Mappers
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<Product, EditProductDto>();
            CreateMap<ProductDto, Product>();
            CreateMap<EditProductDto, Product>();

            CreateMap<User, UserDto>();
            CreateMap<User, NewUserDto>();
            CreateMap<User, EditUserDto>();
            CreateMap<UserDto, User>();
            CreateMap<NewUserDto, User>();
            CreateMap<EditUserDto, User>();
        }
    }
}
