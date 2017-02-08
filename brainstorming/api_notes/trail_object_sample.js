// {
// "places": [
  // {
  //   "city": "Tiburon",
  //   "state": "California",
  //   "country": "United States",
  //   "name": "Angel Island",
  //   "parent_id": null,
  //   "unique_id": 399,
  //   "directions": "Blithedale east off of hwy 101 in Mill Valley, park in tiburon, drop your pants an bend over to park at a lot, 14.50 to ride ferry with a bike, cash at dock.",
  //   "lat": 37.86882,
  //   "lon": -122.4346,

  //   "description": null, // null || str
  //   "date_created": null, // null || str
  //   "children": [],
  //   "activities": [ /** array of objects OR empty array **/ ]
//   }
// ]
//}

// hiking activity object:
        //   {
//           "name": "Angel Island", //string
//           "unique_id": "2-1337", //string Num
//           "place_id": 399, //num
//           "activity_type_id": 2, //num
//           "activity_type_name": "hiking", //string
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=1337", //picture href
//           "attribs": {
//             "\"length\"": "\"18\""
//           },
//           "description": "Angel Island features 18 miles of hiking trails near Tiburon, CA.",
//           "length": 18,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }

// mountain biking activity object example:
//        {
//           "name": "Angel Island",
//           "unique_id": "1-3159",
//           "place_id": 399,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=3159",
//           "attribs": {
//             "\"length\"": "\"18\"",
//             "\"nightride\"": "null"
//           },
//           "description": "couple of loops, one on pavment and one higher in fire road, had fun bootlegging some old bulidings. Rode China Camp before this so it was a full day.",
//           "length": 18,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 2
//         }

// camping activity type object EXAMPLE//         {
//           "name": "Kirby Cove Campground",
//           "unique_id": "3-4476",
//           "place_id": 10061,
//           "activity_type_id": 6,
//           "activity_type_name": "camping",
//           "url": "http://www.tripleblaze.com/trail.php?c=2&i=4476",
//           "attribs": {
//             "\"length\"": "\"3\""
//           },
//           "description": "Kirby Cove is located just eight miles north of downtown San Francisco, at historic Battery Kirby. Visitors are awarded breathtaking views of San Francisco, its famous Golden Gate Bridge and the rugged Pacific Coast of northern California.",
//           "length": 3,
//           "activity_type": {
//             "created_at": "2012-08-15T17:31:31Z",
//             "id": 6,
//             "name": "camping",
//             "updated_at": "2012-08-15T17:31:31Z"
//           },
//           "thumbnail": "http://images.tripleblaze.com/2011/03/4476-1300516526-0.jpg",
//           "rank": null,
//           "rating": 0
//         }


// FULL EXAMPLE
//
// HTTP/1.1 200 OK
// Cache-Control: max-age=0, private, must-revalidate
// Connection: keep-alive
// Content-Type: application/json; charset=utf-8
// Date: Tue, 07 Feb 2017 18:18:57 GMT
// Etag: "ce482de5d0d0129fbeb4f85d83984a5e"
// Server: Mashape/5.0.6
// Transfer-Encoding: chunked
// Via: 1.1 vegur
// X-Rack-Cache: miss
// X-Request-Id: e3501d18-ad25-4b44-848e-2034db728ea2
// X-Runtime: 0.404964
// X-Ua-Compatible: IE=Edge,chrome=1
//
// {
//   "places": [
//     {
//       "city": "Tiburon",
//       "state": "California",
//       "country": "United States",
//       "name": "Angel Island",
//       "parent_id": null,
//       "unique_id": 399,
//       "directions": "Blithedale east off of hwy 101 in Mill Valley, park in tiburon, drop your pants an bend over to park at a lot, 14.50 to ride ferry with a bike, cash at dock.",
//       "lat": 37.86882,
//       "lon": -122.4346,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Angel Island",
//           "unique_id": "1-3159",
//           "place_id": 399,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=3159",
//           "attribs": {
//             "\"length\"": "\"18\"",
//             "\"nightride\"": "null"
//           },
//           "description": "couple of loops, one on pavment and one higher in fire road, had fun bootlegging some old bulidings. Rode China Camp before this so it was a full day.",
//           "length": 18,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 2
//         },
//         {
//           "name": "Angel Island",
//           "unique_id": "2-1337",
//           "place_id": 399,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=1337",
//           "attribs": {
//             "\"length\"": "\"18\""
//           },
//           "description": "Angel Island features 18 miles of hiking trails near Tiburon, CA.",
//           "length": 18,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "Tiburon",
//       "state": "California",
//       "country": "United States",
//       "name": "Ring Mountain Open Space",
//       "parent_id": null,
//       "unique_id": 467,
//       "directions": "There are a couple ways to get there. You can come in from an old access that is fairly overgrown in Tiburon. Exit East Blithedale and head towards Tiburon. About 4 miles down the road goes to 1 lane... Park just before this at Blackies Pasture. Head down Trestle Glen to Shepherd Way and turn left. This is where it becomes a bit tricky.... You head up the road and see s church parking lot on your right. Enter the lot and turn quick left... Head into the bushes, you\\'ll see a little wood bridge and then up about 300ft a gate to pass the bike over. This is an old access that has not been maintained. From there you get a NICE climb and enter the trails. There are many fire roads and single track up there to have some fun with. &lt;br /&gt;You can also enter from Corte Madera I think but have not tried yet... Off Paradise Drive. You can also enter or exit off Reed Drive and head back to your car. Nice down hill nothing to technical around...  ",
//       "lat": 37.90319,
//       "lon": -122.48219,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Ring Mountain Open Space",
//           "unique_id": "1-2094",
//           "place_id": 467,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=2094",
//           "attribs": {
//             "\"length\"": "\"10\"",
//             "\"nightride\"": "null"
//           },
//           "description": "Some nice loops and I have yet to see trail names around there. I used to ride this years ago in HS and just started again. Great views of San Francisco, Sausalito, Corte Madera, and Mt. Tam. <br />Some loose gravel, good climbs, everything a bit short though.",
//           "length": 10,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": "http://images.singletracks.com/2009/trails/02/2094-1181624375.jpg",
//           "rank": null,
//           "rating": 3
//         },
//         {
//           "name": "Ring Mountain Open Space",
//           "unique_id": "2-872",
//           "place_id": 467,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=872",
//           "attribs": {
//             "\"length\"": "\"10\""
//           },
//           "description": "Ring Mountain Open Space features 10 miles of hiking trails near Tiburon, CA.",
//           "length": 10,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Presidio",
//       "parent_id": null,
//       "unique_id": 481,
//       "directions": "Start at Fulton and Baker, end at Presidio and Mesa.",
//       "lat": 37.79086,
//       "lon": -122.45942,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Marin Headlands Loop",
//       "parent_id": null,
//       "unique_id": 486,
//       "directions": "I like to start from the Golden Gate Bridge and maybe park your car at Battery East Parking lot.  &lt;br /&gt;The best way to get to the trail is cross the bridge and head towards the Headlands trail access &lt;br /&gt;points.  This GPS route crosses the bridge heads towards Saulsalito but takes a quick left onto &lt;br /&gt;Bunker Road / Tunnel.  You will then see a parking lot off Bunker Road on the right.  I follow the &lt;br /&gt;Bobcat trail up hill to Marincello trail.  I then hit the horse stables then head back up hill using &lt;br /&gt;Oak Hills trail then down on Miwok train.  This will take you back to Bunker road and the Golden &lt;br /&gt;Gate.  You also have a lot trail options from here as well. Rodeo Valley train, etc.",
//       "lat": 37.80161,
//       "lon": -122.45788,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Marin Headlands",
//           "unique_id": "1-2408",
//           "place_id": 486,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=2408",
//           "attribs": {
//             "\"length\"": "\"19\"",
//             "\"nightride\"": "null"
//           },
//           "description": "This is a great route with great sampling of the Marin Headlands.  There is a wide offering and <br />network of trails.  You can really obtain a mix of climbs and decent.  Most of the trails are double <br />track with a few single tracks here and there.  It\\'s basically a good mix and has something for <br />everyone.  If you are looking for hard core technical trails this might not be the best option but the <br />environment is truly amazing.",
//           "length": 19,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": "http://images.singletracks.com/2015/02/IMG_0118.jpg",
//           "rank": null,
//           "rating": 3.67
//         }
//       ]
//     },
//     {
//       "city": "Mill Valley",
//       "state": "California",
//       "country": "United States",
//       "name": "Coast View Trail",
//       "parent_id": null,
//       "unique_id": 653,
//       "directions": "Park at the Pantol Ranger Station on the Panoramic Highway",
//       "lat": 37.87859,
//       "lon": -122.55455,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Coast View Trail",
//           "unique_id": "1-4815",
//           "place_id": 653,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=4815",
//           "attribs": {
//             "\"length\"": "\"6\"",
//             "\"nightride\"": "null"
//           },
//           "description": "A little bit of fire road then single track leads you down to the coast. Great views, about 1100 feet of climbing. ",
//           "length": 6,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": "http://images.singletracks.com/2014/12/IMG_0363.jpg",
//           "rank": null,
//           "rating": 4
//         },
//         {
//           "name": "Coast View Trail",
//           "unique_id": "2-2216",
//           "place_id": 653,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=2216",
//           "attribs": {
//             "\"length\"": "\"6\""
//           },
//           "description": "Coast View Trail features 6 miles of hiking trails near Mill Valley, CA.",
//           "length": 6,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Mt. Sutro Historic Trail",
//       "parent_id": null,
//       "unique_id": 664,
//       "directions": "Fun downhill in San Francisco. Go up to the top of Mt. Sutro by way of Clarendon Ave. and Johnston Dr.  Drop down from 800 ft to 400ft on this singletrack. All the way to Stanyan Ave/ 17th St.",
//       "lat": 37.75756,
//       "lon": -122.45615,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Mount Sutro Historic Trail",
//           "unique_id": "1-5180",
//           "place_id": 664,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=5180",
//           "attribs": {
//             "\"length\"": "\"2\"",
//             "\"nightride\"": "null"
//           },
//           "description": "Fun ride through the Mt. Sutro forest.  Technical signal track that has some big drops if you slip on &quot;Historic Trail&quot;.  A lot of cutbacks going down to Stanyan St. exit. This trail is well maintained by volunteers at http://sutrostewards.org.",
//           "length": 2,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": "http://images.singletracks.com/2013/12/image-29.jpg",
//           "rank": null,
//           "rating": 4.25
//         }
//       ]
//     },
//     {
//       "city": "Mill Valley",
//       "state": "California",
//       "country": "United States",
//       "name": "Muir Woods",
//       "parent_id": null,
//       "unique_id": 5329,
//       "directions": "Muir Woods is located 12 miles north of the Golden Gate Bridge. Take Highway 101 to the Highway 1/ Stinson Beach Exit. Follow the signs to Muir Woods. Roads to the park are steep and winding. Vehicles over 35 feet long are prohibited. Parking space is very limited and fills quickly on most days.",
//       "lat": 37.891763,
//       "lon": -122.570511,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Muir Woods",
//           "unique_id": "2-595",
//           "place_id": 5329,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=595",
//           "attribs": {
//             "\"length\"": "\"6\""
//           },
//           "description": "Incredible Redwood forest with connecting trails to the coast. Trails are wide, well marked, and generally follow an easy grade. ",
//           "length": 6,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": "http://images.tripleblaze.com/2012/05/IMG_2490-0.jpg",
//           "rank": null,
//           "rating": 5
//         }
//       ]
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Presidio at Golden Gate National Recreations Area",
//       "parent_id": null,
//       "unique_id": 6099,
//       "directions": "The Presidio can be reached from the north by crossing the Golden Gate Bridge (Highways 1 and 101); from the east by way of Lombard Street (Highway 101); and from the south via Highway 1.&lt;br /&gt;&lt;br /&gt;Source: National Park Service",
//       "lat": 37.830811,
//       "lon": -122.524365,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Presidio at Golden Gate National Recreations Area",
//           "unique_id": "2-2905",
//           "place_id": 6099,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=2905",
//           "attribs": {
//             "\"length\"": "\"0\""
//           },
//           "description": "The Presidio contains over 25 miles of hiking trails, including the Golden Gate Promenade, Presidio Promenade, Coastal Trail, Ecology Trail, and portions of the Bay Area Ridge Trail, the Bay Trail, and the Anza National Historic Trail. &lt;br /&gt;<br />Source: National Park Service",
//           "length": 0,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": "http://images.tripleblaze.com/2012/04/Presiadio-0.jpg",
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Angel Island SP",
//       "parent_id": null,
//       "unique_id": 6830,
//       "directions": "Access to the Island is by private boat or public ferry from San Francisco, Tiburon or Vallejo. There is NO weekday ferry service to Angel Island during the winter. Latitude/Longitude: 37.8642 / -122.4308 Bicycles can be brought to the island on the ferry and used on the island's main roads. Bikes can also be rented.",
//       "lat": 37.864167,
//       "lon": -122.430833,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Sausalito",
//       "state": "California",
//       "country": "United States",
//       "name": "Kirby Cove Campground",
//       "parent_id": null,
//       "unique_id": 10061,
//       "directions": "From 101 North, take Alexander Ave exit; from 101 South, take Sausalito exit. Turn left at the stop sign. Turn right up the steep hill named Conzelman Road, just before the entrance to the Golden Gate Bridge. The Kirby Cove campground entrance will be on the left a quarter mile up on Conzelman Road. Look for the 3 poles at the end of a gravel pull-out and a locked white service gate.",
//       "lat": 37.84035,
//       "lon": -122.488889,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Kirby Cove Campground",
//           "unique_id": "3-4476",
//           "place_id": 10061,
//           "activity_type_id": 6,
//           "activity_type_name": "camping",
//           "url": "http://www.tripleblaze.com/trail.php?c=2&i=4476",
//           "attribs": {
//             "\"length\"": "\"3\""
//           },
//           "description": "Kirby Cove is located just eight miles north of downtown San Francisco, at historic Battery Kirby. Visitors are awarded breathtaking views of San Francisco, its famous Golden Gate Bridge and the rugged Pacific Coast of northern California.",
//           "length": 3,
//           "activity_type": {
//             "created_at": "2012-08-15T17:31:31Z",
//             "id": 6,
//             "name": "camping",
//             "updated_at": "2012-08-15T17:31:31Z"
//           },
//           "thumbnail": "http://images.tripleblaze.com/2011/03/4476-1300516526-0.jpg",
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "Pacifica",
//       "state": "California",
//       "country": "United States",
//       "name": "San Francisco Rv Resort",
//       "parent_id": null,
//       "unique_id": 10241,
//       "directions": "South on 101  Cross the Golden Gate Bridge (Toll) staying in the right hand lane. Follow signs for Hwy 1 South. Merge onto I280. Take Exit 47B Hwy 1 to Pacifica. After approximately 2 miles take Exit 507 Manor Dr/Palmetto Ave. Bear left at end of off ramp onto Palmetto. Go past Safeway. Go straight at 4-way Stop. We are a block and a half on the right.   From I580 or I80  Cross the Bay Bridge (Toll). Take Exit 431 I280 to Daly City. Take Exit 47B Hwy 1 to Pacifica. After approximately 2 miles take Exit 507 Manor Dr/Palmetto Ave. Bear left at end of off ramp onto Palmetto. Go past Safeway. Go straight at 4-way Stop. We are a block and a half on the right.   I5 North from LA  Take Exit 403B Hwy 152 West to Gilroy. Follow instructions below for North on 101.   North on 101  Coming north on 101 south of San Jose take Hwy 85 North to I280 North to Exit 47 Hwy 1 South to Pacifica. (DO NOT take exit 41 Hwy 35 to Pacifica)! After approximately 2 miles take Exit 507 Manor Dr/Palmetto Ave. Bear left at end of off ramp onto Palmetto. Go past Safeway. Go straight at 4-way Stop. We are a block and a half on the right.   North on Hwy 1  Take Exit 507 Manor Dr/Monterey Rd. At end of off ramp turn left at 4-way stop. Turn left at next 4-way stop. Turn left at next 4-way stop (Walgreens). We are a block and a half on the right.",
//       "lat": 37.646111,
//       "lon": -122.4925,
//       "description": null,
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "San Francisco Rv Resort",
//           "unique_id": "3-4656",
//           "place_id": 10241,
//           "activity_type_id": 6,
//           "activity_type_name": "camping",
//           "url": "http://www.tripleblaze.com/trail.php?c=2&i=4656",
//           "attribs": {
//             "\"length\"": "\"3\""
//           },
//           "description": "The worst thing about staying at San Francisco RV Resort is having to leave! Just 15 miles from the Golden Gate Bridge, HalfMoon Bay, Fisherman&amp;amp;#39;s Wharf, Alcatraz, and many of the Bay Area&amp;amp;#39;s other favorites, San Francisco RV Resort can&amp;amp;#39;t be beat! Our 182 sites accommodate the smallest of RV&amp;amp;#39;s to 40-foot buses, and each site is paved, level, and able to accommodate up to 5 slides. We are situated on a bluff overlooking the Pacific Ocean and boast over 1000 feet of semi-private beach. The Pacific Ocean is ideal for surfers, tide-pool adventurers, and loungers alike and it&amp;amp;#39;s just a short stroll away!    Our knowledgeable staff is eager to make your stay as comfortable and enjoyable as possible. Whether you would like help getting settled or want advice about planning a day-trip, we&amp;amp;#39;re at your service. We are also the only RV Resort in the area to provide tours through a partnership with a top-notch company specializing in private excursions. San Francisco offers fantastic public transportation, so there&amp;amp;#39;s no need to drive into the city. You can hop on a bus located right outside our gates that will take you 3 miles to the BART (Bay Area Rapid Transit) and allow yourself to be whisked off to Fisherman&amp;amp;#39;s Wharf or Pier 39. Then, after a full day of sightseeing ride back to the resort to soak in our hot tub or take a swim in our 84-degree pool (summer season only).    You&amp;amp;#39;ll enjoy San Francisco RV Resort in the late fall and early winter seasons as well as in the summer. While much of the country is facing the first bitter gusts of winter, here in the Bay Area we enjoy clear blue skies and temperatures in the mid 60&amp;amp;#39;s to low 70&amp;amp;#39;s. Come anytime of the year, and see the beauty that is San Francisco RV Resort!",
//           "length": 3,
//           "activity_type": {
//             "created_at": "2012-08-15T17:31:31Z",
//             "id": 6,
//             "name": "camping",
//             "updated_at": "2012-08-15T17:31:31Z"
//           },
//           "thumbnail": "http://images.tripleblaze.com/2011/03/4656-1300522003-0.jpg",
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "Albany",
//       "state": "California",
//       "country": "United States",
//       "name": "Albany State Marine Reserve",
//       "parent_id": null,
//       "unique_id": 14660,
//       "directions": null,
//       "lat": 37.88687,
//       "lon": -122.297748,
//       "description": "This property is new and may not be available for public use, pending necessary planning, facility development and staffing.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Belvedere Tiburon",
//       "state": "California",
//       "country": "United States",
//       "name": "Angel Island State Park",
//       "parent_id": null,
//       "unique_id": 14663,
//       "directions": "Access to the Island is by private boat or public ferry.&lt;br /&gt;From San Francisco, Oakland and Alameda - Blue &amp; Gold Ferry Service    www.blueandgoldfleet.com&lt;br /&gt;From Tiburon - Tiburon/Angel Island Ferry Service   www.angelislandferry.com",
//       "lat": 37.860381,
//       "lon": -122.431295,
//       "description": "A brief ferry trip from San Francisco, Tiburon, Vallejo, or Oakland/Alameda, this former Civil War camp preserves many of its wooden army buildings. It was next a jumping-off point for soldiers returning from the World War II Pacific campaigns and later home to a Nike missile base. The island offers campsites, biking and hiking trails, bike rentals and sea kayak tours with breathtaking views. The Immigration Station Museum details the historic arrival of Asian immigrants. Accessible picnicking, boating, tram tour, exhibits, Cove CafÂ, and a van with a lift (call ahead). (415) 435-1915.Tram tours: 897-0715.",
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Hirsch Farm",
//           "unique_id": "1-5860",
//           "place_id": 14663,
//           "activity_type_id": 5,
//           "activity_type_name": "mountain biking",
//           "url": "http://www.singletracks.com/item.php?c=1&i=5860",
//           "attribs": {
//             "\"length\"": "\"10\"",
//             "\"nightride\"": "null"
//           },
//           "description": "Start in the open field at the gate. Go right (north) from the gate. Loop will take you around the Block House course and return you to the gate.",
//           "length": 10,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:35Z",
//             "id": 5,
//             "name": "mountain biking",
//             "updated_at": "2012-08-15T16:12:35Z"
//           },
//           "thumbnail": "http://images.singletracks.com/2014/04/Barn.jpg",
//           "rank": null,
//           "rating": 0
//         },
//         {
//           "name": "Angel Island State Park",
//           "unique_id": "2-3470",
//           "place_id": 14663,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=3470",
//           "attribs": {
//             "\"length\"": "\"5\""
//           },
//           "description": "For an island barely a square mile in size, Angel Island has an extremely diverse history. Over the last two centuries, the island has seen use as a Mexican land grant, an Army artillery post, and an immigration station. Now it's a state park, attracting hikers, history buffs, and islophiles of all persuasions.",
//           "length": 5,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         },
//         {
//           "name": "Angel Island State Park",
//           "unique_id": "3-8217",
//           "place_id": 14663,
//           "activity_type_id": 6,
//           "activity_type_name": "camping",
//           "url": "http://www.tripleblaze.com/trail.php?c=2&i=8217",
//           "attribs": {
//             "\"length\"": "\"3\""
//           },
//           "description": "Bicycles are allowed on Angel Island, all riders must wear helmets.Bike rentals are available seasonally. Dogs are not allowed on the island, service animals excepted. <br />Roller skates, roller blades, skateboards, and scooters are prohibited. Charcoal grills or camp stoves are permitted in campsites, no wood fires allowed. Night travel after sunset on the island is prohibited in some areas for park security and public safety.",
//           "length": 3,
//           "activity_type": {
//             "created_at": "2012-08-15T17:31:31Z",
//             "id": 6,
//             "name": "camping",
//             "updated_at": "2012-08-15T17:31:31Z"
//           },
//           "thumbnail": "http://images.tripleblaze.com/2012/08/photo_001-2.jpg",
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Candlestick Point State Recreation Area",
//       "parent_id": null,
//       "unique_id": 14698,
//       "directions": "Take the Candlestick Park exit off U.S. 101 in San Francisco.",
//       "lat": 37.714567,
//       "lon": -122.381759,
//       "description": "This popular Bay Area park has much to offerÃ' windsurfing, group picnicking, and riding bikes along the bike trail. Accessible approach to pier, fishing platform, picnic area, and garden. (415) 671-0145.",
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Candlestick Point State Recreation Area",
//           "unique_id": "2-3490",
//           "place_id": 14698,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=3490",
//           "attribs": {
//             "\"length\"": "\"0\""
//           },
//           "description": "The park offers hiking, jogging, bicycling, bird watching, informal games, and picnicking. There is a bike path and a fitness course. Candlestick Point is also a popular entry point for windsurfing on the bay.",
//           "length": 0,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "Oakland",
//       "state": "California",
//       "country": "United States",
//       "name": "Eastshore State Park",
//       "parent_id": null,
//       "unique_id": 14730,
//       "directions": "Richmond Latitude/Longitude: 37.8808 / - 122.3471",
//       "lat": 37.867877,
//       "lon": -122.307208,
//       "description": "The park includes tidelands and upland property along 8.5 miles of shoreline of the San Francisco Bay.",
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Eastshore State Park",
//           "unique_id": "2-3506",
//           "place_id": 14730,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=3506",
//           "attribs": {
//             "\"length\"": "\"0\""
//           },
//           "description": "Some areas of the park are now open to the public providing hiking, biking, bird watching and other day-use activities. While no one road extends the entire length of the park, the San Francisco Bay Trail will link the entire park when completed.",
//           "length": 0,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "Emeryville",
//       "state": "California",
//       "country": "United States",
//       "name": "Emeryville Crescent State Marine Reserve",
//       "parent_id": null,
//       "unique_id": 14735,
//       "directions": null,
//       "lat": 37.831316,
//       "lon": -122.285247,
//       "description": "This property is new and may not be available for public use, pending necessary planning, facility development and staffing.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Carmel",
//       "state": "California",
//       "country": "United States",
//       "name": "Point Lobos State Natural Reserve",
//       "parent_id": null,
//       "unique_id": 14851,
//       "directions": "On the central coast of California in Monterey County. The entrance is located three miles south of Carmel on Highway 1.",
//       "lat": 37.78106,
//       "lon": -122.514227,
//       "description": "Sea lions, harbor seals, gray whales, sea otters, and seabirds make this reserve their home.You can make a great day of it by hiking or picnicking. (831) 624-4909.",
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "Point Lobos State Natural Reserve",
//           "unique_id": "2-3574",
//           "place_id": 14851,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=3574",
//           "attribs": {
//             "\"length\"": "\"3\""
//           },
//           "description": "The Cypress Grove Trail and North Shore Trail offer hikers a 0.75 mile to 3 miles or more round trip. Both Cypress Grove Trail and North Shore Trail depart from the northwest end of Cypress Grove parking area.",
//           "length": 3,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "Oakland",
//       "state": "California",
//       "country": "United States",
//       "name": "Robert W. Crown Memorial State Beach",
//       "parent_id": null,
//       "unique_id": 14870,
//       "directions": "In the city of Alameda, the visitor center is located on McKay Avenue.",
//       "lat": 37.765909,
//       "lon": -122.274759,
//       "description": "This state beach was named in memory of State Assemblyman Robert W. Crown, who campaigned for the site's preservation as public parkland.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Daly City",
//       "state": "California",
//       "country": "United States",
//       "name": "San Bruno Mountain SP",
//       "parent_id": null,
//       "unique_id": 14877,
//       "directions": "From Highway 101, take the Bayshore Boulevard/Brisbane exit. Continue on Bayshore Boulevard to Guadalupe Canyon Parkway. Turn west on Guadalupe Canyon Parkway toward the Mountain and go to the park entrance. &lt;br /&gt;&lt;br /&gt;From Highway 280, take the Mission Street exit. Go north on Mission Street to Market Street. Turn right on Market street and proceed northeast. At Guadalupe Canyon Parkway, turn right and go eastbound to the park entrance.",
//       "lat": 37.688843,
//       "lon": -122.436484,
//       "description": "The park is located at the northern reaches of the Santa Cruz range, which provides visitors with gorgeous views of the bay and city. The park is a diamond in the rough of the nearby cities. It offers delightful hiking, sightseeing and picnicking options, as well as 2,300 hundred plus acres of beautiful views. \r\n\r\nAs with many parks in California, the weather is changeable so wear layered clothing.",
//       "date_created": null,
//       "children": [],
//       "activities": [
//         {
//           "name": "San Bruno Mountain SP",
//           "unique_id": "2-3554",
//           "place_id": 14877,
//           "activity_type_id": 2,
//           "activity_type_name": "hiking",
//           "url": "http://www.tripleblaze.com/trail.php?c=3&i=3554",
//           "attribs": {
//             "\"length\"": "\"10\""
//           },
//           "description": "The San Bruno Mountain State Park is located at the northern reaches of the Santa Cruz range, which provides visitors with gorgeous views of the bay and city. <br /><br />Hiking is the most popular activity, the main starting point being the park's entrance. From here you embark on a variety of outstanding views.  During your hike, feel free to stop at one of the many picnicking sites for a refreshing break. There are four main trail hikes with a few different length options. Hike one, the Summit Loop is 3.54 miles. Hike two, the Bog Loop is .8 miles. Hike three, the Saddle Loop is 2.9 miles. Hike four, all access hike/loop is .3-.8 miles.  <br /><br />As with many parks in California, the weather is changeable so wear layered clothing.",
//           "length": 10,
//           "activity_type": {
//             "created_at": "2012-08-15T16:12:21Z",
//             "id": 2,
//             "name": "hiking",
//             "updated_at": "2012-08-15T16:12:21Z"
//           },
//           "thumbnail": null,
//           "rank": null,
//           "rating": 0
//         }
//       ]
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Thornton State Beach",
//       "parent_id": null,
//       "unique_id": 14910,
//       "directions": "In Daly City, at the end of Thornton Beach Road. Follow John Daly Boulevard west from Interstate 280 across Skyline Boulevard into Thornton State Beach. From Skyline Boulevard, turn west at the intersection with John Daly Boulevard into Thornton State Beach. From the parking area or the stables, proceed to the dunes on old Thornton Beach Road. The Bay Area Ridge Trail begins where the road meets the dunes.",
//       "lat": 37.696041,
//       "lon": -122.497727,
//       "description": "This beach is not available to the general public at this time.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Sausalito",
//       "state": "California",
//       "country": "United States",
//       "name": "From Golden Gate Bridge, north 3 miles on US 101 to Sausalito/Marin City exit, then Bridgeway to Harbor Drive, turn left, then right onto Marinship Way and follow signs to the Visitor Center.",
//       "parent_id": null,
//       "unique_id": 21870,
//       "directions": "From Golden Gate Bridge, north 3 miles on US 101 to Sausalito/Marin City exit, then Bridgeway to Harbor Drive, turn left, then right onto Marinship Way and follow signs to the Visitor Center.",
//       "lat": 37.864113,
//       "lon": -122.495572,
//       "description": "The Bay Model was built in 1957 as a research tool to test the impact of proposed changes to San Francisco Bay and its related waterways. The model has been used to study the effects of chemical/oil spills, altering of shipping channels, levee failures, and bay in-filling. The hydraulic model was used to simulate currents, tidal action, sediment movement and the mixing of fresh and salt water. In 1980 the visitor center portion was added, and the Model adopted the function of an Educational Center for learning about the geography, ecology and natural history of the bay and delta areas. Although today no active research takes place using the actual model, the facility still remains open to the public and the visitor center still serves as a public education center. Picnicking and miscellaneous trails available.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Bay Point",
//       "state": "California",
//       "country": "United States",
//       "name": "Bay Point Regional Shoreline",
//       "parent_id": null,
//       "unique_id": 22952,
//       "directions": "Located at the end of McAvoy Road in Bay Point, CA.",
//       "lat": 37.940704,
//       "lon": -122.409807,
//       "description": "Bay Point Regional Shoreline provides access to undeveloped open space and marsh habitat in an area surrounded by residential, military, and industrial development. The public can enjoy views of Suisun Bay and opportunities for hiking, birdwatching, shoreline fishing, nature study, and other recreational pastimes. The nearly 150-acre parkland is at the approximate midpoint of the San Francisco Bay Estuary and the Sacramento/San Joaquin River Delta. These saltwater and freshwater systems converge at Suisun Bay and have historically been a major influence on the lives and natural surroundings of the Bay Point community.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Richmond",
//       "state": "California",
//       "country": "United States",
//       "name": "Brooks Island Regional Preserve",
//       "parent_id": null,
//       "unique_id": 22957,
//       "directions": "Located off the Richmond Inner Harbor",
//       "lat": 37.906231,
//       "lon": -122.369212,
//       "description": "Located just off the Richmond Inner Harbor, this 373-acre island preserve in San Francisco Bay has a colorful history and provides wonderful views of the Bay Area from its 160' rocky peak. Access to Brooks Island Regional Preserve is by reservation only. The Park District offers two kinds of naturalist-led kayak tours: &quot;bring-your-own-boat&quot; trips and outfitter-led trips. Telephone 1-888-EBPARKS for more information.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "Alameda",
//       "state": "California",
//       "country": "United States",
//       "name": "Crown Memorial State Beach",
//       "parent_id": null,
//       "unique_id": 22967,
//       "directions": "From San Francisco, take the Bay Bridge to I-580 east and I-980 (downtown Oakland). Exit I-980 at 11th/12th Streets, go through several traffic lights and make a left onto 5th Street. This will take you to Broadway and the Oakland/Alameda Tube. Once through the Tube, you'll be on Webster Street. Webster will dead end at Central Avenue. Turn left onto Central and right onto Eighth Street to reach the Crown Beach entrance. Turn right on Central then turn left on McKay Ave to reach the Crab Cove entrance.",
//       "lat": 37.76482,
//       "lon": -122.274293,
//       "description": "Crown Beach is operated by the Park District under a cooperative agreement with the State of California and City of Alameda. It is named in memory of State Assemblyman Robert W. Crown, who had campaigned for its preservation as public parkland.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     },
//     {
//       "city": "San Francisco",
//       "state": "California",
//       "country": "United States",
//       "name": "Eastshore State Park",
//       "parent_id": null,
//       "unique_id": 22974,
//       "directions": "Driving directions: Eastshore State Park is located along 8.5 miles of the San Francisco Bay shoreline just west of Highway I-80 (the Eastshore Freeway) and Highway I-580. There are many entrances to Eastshore State Park. The major entrances are located at the following interchanges along I-80 and I-580: Central Avenue in Richmond; Buchanan Street in Albany; Gilman Street, University Avenue, and Ashby Avenue, in Berkeley; and Powell Street in Emeryville.",
//       "lat": 37.867413,
//       "lon": -122.306218,
//       "description": "Eastshore State Park is one of the most outstanding achievements in the history of open space protection. It is the result of decades of citizen efforts to protect San Francisco Bay as a public open space resource. Over 4,000 major stakeholders and interested parties reached substantial consensus on the future uses and improvements for the park. The newly designated State seashore is a recreational facility harmonious with its natural setting. It is located in the midst of one of the most highly urbanized areas of California.",
//       "date_created": null,
//       "children": [],
//       "activities": []
//     }
