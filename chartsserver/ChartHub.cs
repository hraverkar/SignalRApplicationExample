using chartsserver.Models;
using Microsoft.AspNetCore.SignalR;

public class ChartHub : Hub
{
    public async Task BroadcastChartData(List<ChartModel> data) =>
        await Clients.All.SendAsync("broadcastchartData", data);
}