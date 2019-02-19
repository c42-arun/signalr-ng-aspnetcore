using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using server.Models;
using server.SignalR;

namespace server.controllers
{
    [Route("api/notification")]
    public class NotificationController : Controller
    {
        private readonly IHubContext<EventHub> _hub;
        public NotificationController(IHubContext<EventHub> hub)
        {
            _hub = hub;
        }

        [HttpPost("send")]
        public IActionResult Send([FromBody] Message message)
        {
            _hub.Clients.All.SendAsync("getNotifications", message.Text);

            return Ok($"Message sent: {message.Text}");
        }
    }
}