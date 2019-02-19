using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace server.SignalR
{
    public class EventHub : Hub
    {
        public async Task Notify(string message)
        {
            await Clients.Others.SendAsync("getNotifications", message);
        }
    }
}