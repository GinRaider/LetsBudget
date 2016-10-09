using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LetsBudget.Startup))]
namespace LetsBudget
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
