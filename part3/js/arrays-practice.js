//STEP 1
window.console.log("**********2nd Movie in Array************");
var moviesList1 = ["Inception","Insurgent","Immortal","Iron Hiest","Italian Job"];
window.console.log(moviesList1[1]);


//STEP 2
window.console.log("**********1st Movie in array************");
var moviesList2 = new Array(5);
moviesList2[0] = "Inception";
moviesList2[1] = "Insurgent";
moviesList2[2] = "Immortal";
moviesList2[3] = "Iron Hiest";
moviesList2[4] = "Italian Job";
window.console.log(moviesList2[0]);


//STEP 3
window.console.log("*****Add one more movie in array at 3rd position*****");
var moviesList3 = new Array(5);
moviesList3[0] = "Inception";
moviesList3[1] = "Insurgent";
moviesList3[2] = "Immortal";
moviesList3[3] = "Iron Hiest";
moviesList3[4] = "Italian Job";
moviesList3.splice(2,0,"Imitation Game");
window.console.log(moviesList3.length);


//STEP 4
window.console.log("****Delete Operator to delete 1st movie*****");
var moviesList4 = [];
moviesList4[0] = "Inception";
moviesList4[1] = "Insurgent";
moviesList4[2] = "Immortal";
moviesList4[3] = "Iron Hiest";
moviesList4[4] = "Italian Job";
delete moviesList4[0];
window.console.log(moviesList4);


//STEP 5
window.console.log("******Display movies using for loop*********");
var moviesList5 = [];
moviesList5[0] = "Inception";
moviesList5[1] = "Insurgent";
moviesList5[2] = "Immortal";
moviesList5[3] = "Iron Hiest";
moviesList5[4] = "Italian Job";
moviesList5[5] = "Ted";
moviesList5[6] = "Mocking Bird";

for (var index = 0; index < moviesList5.length; index++) {
    window.console.log(moviesList5[index]);
}


//STEP 6
window.console.log("******Display movies using for in loop*********");
var moviesList6 = [];
moviesList6[0] = "Inception";
moviesList6[1] = "Insurgent";
moviesList6[2] = "Immortal";
moviesList6[3] = "Iron Hiest";
moviesList6[4] = "Italian Job";
moviesList6[5] = "Ted";
moviesList6[6] = "Mocking Bird";

for (var key in moviesList6) {
    if (moviesList6.hasOwnProperty(key)) {
        window.console.log(moviesList6[key]);
    }
}


//STEP 7
window.console.log("*****Display sorted Movies using for in loop******");
var moviesList7 = [];
moviesList7[0] = "Inception";
moviesList7[1] = "Insurgent";
moviesList7[2] = "Immortal";
moviesList7[3] = "Iron Hiest";
moviesList7[4] = "Italian Job";
moviesList7[5] = "Ted";
moviesList7[6] = "Mocking Bird";
moviesList7 = moviesList7.sort();
for (var key in moviesList7) {
    if (moviesList7.hasOwnProperty(key)) {
        window.console.log(moviesList7[key]);
    }
}


//STEP 8
window.console.log("*****Display list of movies I like and movies I regret watching******");
var moviesList8 = [];
moviesList8[0] = "Inception";
moviesList8[1] = "Insurgent";
moviesList8[2] = "Immortal";
moviesList8[3] = "Iron Hiest";
moviesList8[4] = "Italian Job";
moviesList8[5] = "Ted";
moviesList8[6] = "Mocking Bird";

var leastFavMovies = [];
leastFavMovies[0] = "Big bang";
leastFavMovies[1] = "IT";
leastFavMovies[2] = "Faults in our star";

window.console.log("Movies I like: \n\n");
for (var index = 0; index < moviesList8.length; index++) {
    window.console.log(moviesList8[index]);
}

window.console.log("\n\n\nMovies I regret watching: \n\n");
for (var index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}


//STEP 9
window.console.log("****Display reverse sorted movies*******");
var moviesList9 = [];
moviesList9[0] = "Inception";
moviesList9[1] = "Insurgent";
moviesList9[2] = "Immortal";
moviesList9[3] = "Iron Hiest";
moviesList9[4] = "Italian Job";
moviesList9[5] = "Ted";
moviesList9[6] = "Mocking Bird";

var leastFavMovies = [];
leastFavMovies[0] = "Big bang";
leastFavMovies[1] = "IT";
leastFavMovies[2] = "Faults in our star";

var movies = moviesList9.concat(leastFavMovies);
movies.sort();
movies.reverse();

for (var index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}


//STEP 10
window.console.log("******Display Last Movie in list*********");
var moviesList10 = [];
moviesList10[0] = "Inception";
moviesList10[1] = "Insurgent";
moviesList10[2] = "Immortal";
moviesList10[3] = "Iron Hiest";
moviesList10[4] = "Italian Job";
moviesList10[5] = "Ted";
moviesList10[6] = "Mocking Bird";

var leastFavMovies = [];
leastFavMovies[0] = "Big bang";
leastFavMovies[1] = "IT";
leastFavMovies[2] = "Faults in our star";

var movies = moviesList10.concat(leastFavMovies);
movies.sort();
movies.reverse();

window.console.log(movies.pop());
window.console.log("****************END****************");
