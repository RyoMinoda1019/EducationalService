using EducationalService.API.Models.Responses;
using EducationalService.API.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EducationalService.API.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class GroupController : Controller
    {
        private readonly IGroupAccountRepository _groupAccountRepository;

        public GroupController(IGroupAccountRepository groupAccountRepository)
        {
            _groupAccountRepository = groupAccountRepository;
        }


        [HttpGet("{groupId}")]
        public async Task<IActionResult> GetGroup([FromRoute] String groupId)
        {
            if (Guid.TryParse(groupId, out var groupGuid))
            {
                var group = await _groupAccountRepository.GetGroupAccountAsync(groupGuid);
                var responseGroup = new GetGroup(group);
                return Ok(new Response<GetGroup>(responseGroup));
            } 
            return Ok();
        }
    }
}
