import Blog from "./blog";
import superior from "../../images/blog/superior.jpg";
import duluth from "../../images/blog/duluth.jpg";
import nebraska from "../../images/blog/nebraska.jpg";
import marquette from "../../images/blog/marquette.jpg";
import escarpment from "../../images/blog/escarpment.jpg";
let blogs = [
  new Blog(
    "Superior Adventure",
    `Shelter to shelter across Michigan's Isle Royale`,
    "RICKEY GATES",
    "MAY 18TH, 2018",
    superior,
    "We were both peering over the map on the wooden floor inside the rustic little shelter alongside Washington Creek. Beyond the bug screen of the three-walled enclosure . . .",
    `We were both peering over the map on the wooden floor inside the rustic little shelter alongside Washington Creek. Beyond the bug screen of the three-walled enclosure, a cold spring rain fell from a steely, pre-dawn sky. Sitting on the floor, worn soft from decades of bare feet, spilled coffee and sleeping pads, we counted out miles and tenths of miles as marked on the map, not as responsible navigators, but rather to put off trudging out into the cold for another few minutes.
    “Two point one plus one point three.” My finger scooted north and east along the dotted black path. “Plus nine point four to Little Todd Harbor.”
    “You forgot that point six there,” John said in a deep voice with a slow South Australian accent.
    “Plus point six.”`,
    "https://trailrunnermag.com/destinations/midwest/superior-adventure.html"
  ),
  new Blog(
    "Destination, Nebraska",
    "Trail running gems in Nebraska. Yes, Nebraska.",
    "BRIAN WANDZILAK",
    "APRIL 24TH, 2018",
    nebraska,
    `I mean, I love where I live. It’s the heartland. The state motto is “The Good Life.” . . .`,
    `I mean, I love where I live. It’s the heartland. The state motto is “The Good Life.” Still, there are certain place names that incite a little pang of jealousy in me when I come across them.
    Bend. Asheville. Bozeman. Truckee. Prescott. Boulder. Duluth. Ithaca. Burlington. Blacksburg.
    In Nebraska, trail running is not the standard. Our home is a place people go through on the way to those other places. Oftentimes, sports here are defined by the lights of Friday night and endurance is measured in seconds on the back of a bull or horse, and unless you are carrying a firearm and a permit, Nebraska’s land use is not generally geared towards outdoor endurance pursuits. Blaze-orange running shorts are, however, a decent common ground between hunters and runners.
    So how does a person in Nebraska get pumped to run trails? Among the stadiums and ranches and acres of farmland, we carve our own little experiences. Often a bit contrived, but with no less passion, we run endless loops of wooded paths. We simulate peak bagging with stair and tower climbs.`,
    "https://trailrunnermag.com/destinations/destination-nebraska.html"
  ),
  new Blog(
    "Tough Love",
    "Duluth is a town whose winters and jagged trails offer as much challenge as they do reward.",
    "ALEX KURT",
    "MARCH 1ST, 2016",
    duluth,
    "“Everything about this place just seems tough as shit, you know?” my friend said from the passenger seat of my 1998 Toyota Camry, as we wove along the narrow, two-lane Highway 61 north of Duluth, Minnesota. . . .",
    `“Everything about this place just seems tough as shit, you know?” my friend said from the passenger seat of my 1998 Toyota Camry, as we wove along the narrow, two-lane Highway 61 north of Duluth, Minnesota. “I just imagine everyone up here living in little cabins with no electricity, just being cut from the rocks.”
    It was September 2014, and we were headed northeast, hugging the northern shoreline of Lake Superior (the “North Shore,” as it’s colloquially known throughout the state) en route to the Superior Trail Races. I had conned him into crewing me for the 50-mile event (“It will be fun. You’ll get to hang in the woods, meet some people, and we’ll drink beer at the end!” I had told him), and he was transfixed on the sharp blue water’s edge and stark, rocky cliffs sandwiching the road of Bob Dylan lore.
    We were north of the legendary folk singer’s birthplace—Dylan was born in Duluth and grew up in the Iron Range town of Hibbing before moving to New York and revolutionizing music—but the drive northward through Minnesota drastically changes character when you hit Duluth, seemingly altered by the harbor town that serves as a portal to the true Northwoods.
    Duluth is a city rich in history and Northwoods culture; it has seen the worst of economic times and come thundering back. Despite its post-industrial grit, Duluth is one of America’s best trail towns, both for the unending wilderness to the north and the singletrack that winds, almost surreptitiously, through the city limits. Above all, the city defined by the Lake Superior weather is a place that offers rocky, root-laden challenges, but will endear itself to you if you endure.`,
    "https://trailrunnermag.com/destinations/midwest/tough-love.html"
  ),
  new Blog(
    "Best in Dirt: Marquette, MI",
    "The greatest of the greats",
    "MONIKA DERRIEN, ANICA WONG",
    "MAY 21ST, 2013",
    marquette,
    "Go if You want to bask in the enormity of the greatest of the Great Lakes after some breezy trail miles on sandy shoreline, smooth hardpacked hills and rocky climbs. . . .",
    `Go if You want to bask in the enormity of the greatest of the Great Lakes after some breezy trail miles on sandy shoreline, smooth hardpacked hills and rocky climbs. Superb trail running is ubiquitous in Michigan’s Upper Peninsula, and Marquette, situated on the south side of Lake Superior, has over 100 miles of singletrack, as well as an urban trail system linking the city neighborhoods and parks. With a population of 21,000, Marquette is equal parts civilization and wilderness, with handy bike paths connecting the two. “There are a lot of trail runners because the trails are right outside our backdoors,” says local Mary Connor. Two trail clubs, The Hot Flashes (for women of a certain age) and the newer Run Guys and Girls, offer weekend and weeknight trail-running camaraderie and insider knowledge on local routes.    Race … The Run for Youth (runforyouth.org), with 5K, 10K and 25K trail options, is held on the Noquemanon Trails in June, with a point-to-point course for the 10K and 25K on the Lower Noquemanon Trail. September’s Lake Superior Shoreline Trail Half Marathon & 5K Race Against Tobacco (mqthealth.org/shorerun.htm) is sponsored by Marquette’s premier outfitter, Downwind Sports. “The great thing about the course is that it incorporates Marquette’s varied trail styles,” says Downwind Sports owner, Bill Thompson. “The race starts off on the shores of Lake Superior, on sandy trails through jack-pine forests. Then it climbs through hardwood forests, around a bog, over Hogback Mountain, then back on the Lakeshore Trail, which treads 100 feet up above Lake Superior.” July’s Grand Island Trail Marathon and 10K (greatlakesendurance.com), held 40 miles west in Munising, is run on the ferry-accessible island’s shady and breezy singletrack, narrow dirt roads and beaches. Enjoy lake views and the multi-colored sandstone cliffs of Pictured Rocks National Lakeshore on this wilderness island.`,
    "https://trailrunnermag.com/destinations/midwest/best-in-dirt-marquette-mi.html"
  ),
  new Blog(
    "Escarpment Trail Run",
    `One of the Northeast's most rugged races.`,
    "BRIAN METZLER",
    "JANUARY 3RD, 2019",
    escarpment,
    "For 42 years, the Escarpment Run has been both a staple and a bit of an outlier in the trail-running scene in the Northeast. An 18-mile race over a very challenging course on a variety of surfaces . . .",
    `For 42 years, the Escarpment Run has been both a staple and a bit of an outlier in the trail-running scene in the Northeast. An 18-mile race over a very challenging course on a variety of surfaces, it requires speed, strength, the ability to run over technical terrain and skills for steep climbing and descending.
    “It’s a unique combination of a lot of climbing and some pretty gnarly technical sections,” says Westborough, Massachusetts resident Ben Nephew, a 13-time winner of the race. “But at the same time, it’s also got some runnable sections, so you’ve got to have good speed. So the race is an interesting meeting point between trail runners, mountain runners and fast road runners.”
    Founder Dick Vincent made it clear in the race brochure (and now on the race’s website) that this race is no ordinary affair, mostly to scare away unqualified and underprepared runners, warning that runners will have to navigate over boulders, downed trees, gullies, cliffs and hidden roots, and also deal with bees, slippery rocks, porcupines, black bears and anything else that can be found in the forests of the Catskills.
    “There are a lot of ledges and fast technical downhill running with a lot of risk involved,” Nephew says. “If you go down, it will be pretty ugly with a good amount of blood.”`,
    "https://trailrunnermag.com/destinations/escarpment-trail-run.html"
  ),
];

export default blogs;
