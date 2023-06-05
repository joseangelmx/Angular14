using AutoMapper;
using Inventario.Services.Contrats;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Inventario.DataAccess;
using Inventario.Entities.Users;
using Inventario.Entities.Dtos.Users;
using Microsoft.EntityFrameworkCore;

namespace Inventario.Services.Users
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly InventoryDbContext _context;
        private readonly IMapper _mapper;
        public UserService(UserManager<User> userManager, InventoryDbContext context, IMapper mapper)
        {
            _userManager = userManager;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<UserDto>> GetUsersAsync()
        {
            List<User> users = await _userManager.Users.ToListAsync();

            List<UserDto> usersDto = new List<UserDto>();

            foreach (var user in users)
            {
                usersDto.Add(_mapper.Map<UserDto>(user));
            }

            return usersDto;
        }

        public async Task<UserDto> GetUserAsync(string id)
        {
            User user = await _userManager.Users.Where(x => x.Id == id).FirstOrDefaultAsync();

            UserDto userDto = _mapper.Map<UserDto>(user);

            return userDto;
        }

        public async Task<IdentityResult> AddUserAsync(NewUserDto userDto)
        {
            var result = await _userManager.CreateAsync(new User
            {
                Email = userDto.Email,
                EmailConfirmed = true,
                UserName = userDto.Email,
                FirstName = userDto.FirstName,
                LastName = userDto.LastName,
                PhoneNumber = userDto.PhoneNumber,
                Status = true
            }, userDto.Password);

            return result;

        }

        public async Task EditUserAsync(string id, EditUserDto userDto)
        {
            var user = await _userManager.FindByIdAsync(id);

            user.PhoneNumber = userDto.PhoneNumber;
            user.FirstName = userDto.FirstName;
            user.LastName = userDto.LastName;
            user.Status = userDto.Status;


            UserStore<User> store = new UserStore<User>(_context);
           /* if (!userDto.Password.Equals("") || !userDto.Equals(null))
            {
                string hashedNewPassword = _userManager.PasswordHasher.HashPassword(user, userDto.Password);
                await store.SetPasswordHashAsync(user, hashedNewPassword);
            }*/
            await store.UpdateAsync(user);
        }

        public async Task DeleteUserAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            user.Status = false;

            UserStore<User> store = new UserStore<User>(_context);
            await store.UpdateAsync(user);

        }
    }
}
