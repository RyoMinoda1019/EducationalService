using EducationalService.API.Models.Responses.Types;

namespace EducationalService.API.Models.Responses
{
    public class Response<T>
        where T : class
    {
        bool Success { get; set; }

        MessageType Message { get; set; }

        T? Data { get; set; }

        public Response(T data)
        {
            Success = true;
            Message = MessageType.Null;
            Data = data;
        }
    }
}
