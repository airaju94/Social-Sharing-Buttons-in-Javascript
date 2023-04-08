/*
* Social Buttons Widget written in javascript. multiple social network supported.
* You can add more social media site by customizing the json data.
* Easy to intergrate and easy to customize.
* This social sharing buttons widget is under GPL license,
*/

/*
* Social Buttons Widget
* @author A.I Raju
 @version 1.0
* License GPL.
* Permissions: You are permitted to personal use, commercial use, modify, and distribute anywhere you want.
* Limitations: This software is provided without any warranty and Liability.
*/

/*
* socialJson, all social network sharing api, icons, name at a one variable in json format.
* You can add more services by filling the json data for those services.
*/
var socialJson = {
    "whatsapp":{
        "name": "WhatsApp",
        "api": "https://api.whatsapp.com/send?text={{TITLE}} {{URL}}",
        "color": "#25D366",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z'/></svg>"
    },
    "facebook":{
        "name": "Facebook",
        "api": "https://www.facebook.com/sharer.php?u={{URL}}",
        "color": "#3B5998",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z'/></svg>"
    },
    "twitter":{
        "name": "Twitter",
        "api": "https://twitter.com/intent/tweet?text={{TITLE}} {{URL}}",
        "color": "#55ACEE",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z'/></svg>"
    },
    "telegram":{
        "name": "Telegram",
        "api": "https://telegram.me/share/url?url={{URL}}&text{{TITLE}}",
        "color": "#0088CC",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor'><path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z'/></svg>"
    },
    "reddit":{
        "name": "Reddit",
        "api": "https://reddit.com/submit?url={{URL}}&title={{TITLE}}",
        "color": "#ff5700",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M 29 3 C 26.894531 3 24.433594 4.652344 24.0625 12.03125 C 24.375 12.023438 24.683594 12 25 12 C 25.351563 12 25.714844 12.019531 26.0625 12.03125 C 26.300781 7.597656 27.355469 5 29 5 C 29.703125 5 30.101563 5.382813 30.84375 6.1875 C 31.710938 7.128906 32.84375 8.351563 35.0625 8.8125 C 35.027344 8.550781 35 8.269531 35 8 C 35 7.578125 35.042969 7.179688 35.125 6.78125 C 33.75 6.40625 33.023438 5.613281 32.3125 4.84375 C 31.519531 3.984375 30.609375 3 29 3 Z M 41 4 C 38.792969 4 37 5.796875 37 8 C 37 10.203125 38.792969 12 41 12 C 43.207031 12 45 10.203125 45 8 C 45 5.796875 43.207031 4 41 4 Z M 25 14 C 12.867188 14 3 20.179688 3 29 C 3 37.820313 12.867188 45 25 45 C 37.132813 45 47 37.820313 47 29 C 47 20.179688 37.132813 14 25 14 Z M 7.5 14.9375 C 6.039063 14.9375 4.652344 15.535156 3.59375 16.59375 C 1.871094 18.316406 1.515625 20.792969 2.5 22.84375 C 4.011719 19.917969 6.613281 17.421875 9.96875 15.5625 C 9.207031 15.175781 8.363281 14.9375 7.5 14.9375 Z M 42.5 14.9375 C 41.636719 14.9375 40.792969 15.175781 40.03125 15.5625 C 43.386719 17.421875 45.988281 19.917969 47.5 22.84375 C 48.484375 20.792969 48.128906 18.316406 46.40625 16.59375 C 45.347656 15.535156 43.960938 14.9375 42.5 14.9375 Z M 17 23 C 18.65625 23 20 24.34375 20 26 C 20 27.65625 18.65625 29 17 29 C 15.34375 29 14 27.65625 14 26 C 14 24.34375 15.34375 23 17 23 Z M 33 23 C 34.65625 23 36 24.34375 36 26 C 36 27.65625 34.65625 29 33 29 C 31.34375 29 30 27.65625 30 26 C 30 24.34375 31.34375 23 33 23 Z M 16.0625 34 C 16.3125 34.042969 16.558594 34.183594 16.71875 34.40625 C 16.824219 34.554688 19.167969 37.6875 25 37.6875 C 30.910156 37.6875 33.257813 34.46875 33.28125 34.4375 C 33.597656 33.988281 34.234375 33.867188 34.6875 34.1875 C 35.136719 34.503906 35.222656 35.109375 34.90625 35.5625 C 34.789063 35.730469 31.9375 39.6875 25 39.6875 C 18.058594 39.6875 15.210938 35.730469 15.09375 35.5625 C 14.777344 35.109375 14.859375 34.503906 15.3125 34.1875 C 15.539063 34.027344 15.8125 33.957031 16.0625 34 Z'/></svg>"
    },
    "linkedin":{
        "name": "Linkedin",
        "api": "https://www.linkedin.com/shareArticle?url={{URL}}&title={{TITLE}}",
        "color": "#007bb5",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z'/></svg>"
    },
    "tumblr":{
        "name": "Tumblr",
        "api": "http://www.tumblr.com/share?v=3&u={{URL}}&t={{TITLE}}",
        "color": "#2c4762",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 64 64' fill='currentColor'><path d='M22.521,29.862H19.09c-0.886,0-1.603-0.718-1.603-1.603v-5.905c0-0.97,0.607-1.828,1.522-2.151	c2.225-0.786,6.172-3.122,6.823-9.871c0.096-0.996,0.911-1.77,1.912-1.77h6.391c0.872,0,1.579,0.707,1.579,1.579v9.302h6.468	c0.886,0,1.603,0.718,1.603,1.603v7.213c0,0.886-0.718,1.603-1.603,1.603h-6.468v10.422c0,2.368,1.144,3.275,2.233,3.275	c0.858,0,2.344-0.375,3.437-0.689c0.773-0.222,1.526,0.075,1.848,0.956c0.322,0.881,2.045,5.833,2.045,5.833	c0.315,0.899-0.008,1.891-0.787,2.44c-1.475,1.04-4.248,2.463-8.38,2.463c-6.418,0-13.589-2.852-13.589-13.494	C22.521,38.954,22.521,29.862,22.521,29.862z'/></svg>"
    },
    "digg":{
        "name": "Digg",
        "api": "https://digg.com/submit?url={{URL}}&title={{TITLE}}",
        "color": "#222222",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor'><path d='M 15.035156 9.636719 C 15.035156 10.273438 15.066406 13 15.066406 13 L 19.566406 13 C 19.566406 13 20.097656 13 20.097656 12.363281 C 20.097656 11.726563 20.066406 9 20.066406 9 L 15.566406 9 C 15.566406 9 15.035156 9 15.035156 9.636719 Z M 15.035156 15.636719 C 15.035156 16.273438 15.066406 32 15.066406 32 L 19.566406 32 C 19.566406 32 20.097656 32 20.097656 31.363281 C 20.097656 31.257813 20.066406 15 20.066406 15 L 15.566406 15 C 15.339844 15.0625 15.035156 15 15.035156 15.636719 Z M 9.566406 9 C 9.566406 9 9.035156 9 9.035156 9.636719 L 9.066406 15 L 1.066406 15 C 1.066406 15 0.0664063 15.195313 0.0664063 15.835938 L 0 32 L 13.066406 32 C 13.066406 32 14.035156 32.03125 14.066406 31 C 14.085938 30.363281 14.066406 9 14.066406 9 Z M 9.066406 28.5 C 9.066406 29.136719 8.566406 29 8.566406 29 L 5.066406 29 L 5.066406 18.5 C 5.066406 17.863281 5.609375 17.957031 5.609375 17.957031 L 9.066406 18 Z M 37.066406 15 C 36.613281 14.890625 36.085938 15.191406 36.066406 16 L 36.078125 32 L 45.066406 32 L 45.066406 34 L 37.066406 34 C 37.066406 34 36.066406 33.925781 36.066406 35 C 36.066406 35.636719 36.136719 38 36.136719 38 L 49.566406 38 C 49.566406 38 50.066406 38.136719 50.066406 37.5 C 50.066406 36.863281 50.066406 15 50.066406 15 Z M 45.066406 28.5 C 45.066406 29.136719 44.566406 29 44.566406 29 L 41.066406 29 L 41.066406 18.5 C 41.066406 17.863281 41.566406 18 41.566406 18 L 45.066406 18 Z M 21.566406 15 C 21.566406 15 21.035156 15 21.035156 15.636719 L 21.066406 32 L 30.066406 32 L 30.066406 34 L 21.566406 34 C 21.566406 34 21.066406 33.863281 21.066406 34.5 C 21.066406 35.136719 21.066406 38 21.066406 38 L 34.542969 38 C 34.542969 38 35.074219 38 35.074219 37.363281 C 35.074219 36.726563 35.066406 15 35.066406 15 Z M 30.066406 28.5 C 30.066406 29.136719 29.566406 29 29.566406 29 L 26.066406 29 L 26.066406 18.5 C 26.066406 17.863281 26.566406 18 26.566406 18 L 30.066406 18 Z'/></svg>",
    },
    "pinterest":{
        "name": "Pinterest",
        "api": "http://pinterest.com/pin/create/link/?url={{URL}}",
        "color": "#cb2027",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z'/></svg>"
    },
    "pocket":{
        "name": "Pocket",
        "api": "https://getpocket.com/edit?url={{URL}}",
        "color": "#E6364B",
        "icon": "<svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M18.813 10.259l-5.646 5.419c-.32.305-.73.458-1.141.458-.41 0-.821-.153-1.141-.458l-5.646-5.419c-.657-.628-.677-1.671-.049-2.326.63-.657 1.671-.679 2.325-.05l4.511 4.322 4.517-4.322c.66-.631 1.697-.607 2.326.049.631.645.615 1.695-.045 2.326l-.011.001zm5.083-7.546c-.299-.858-1.125-1.436-2.041-1.436H2.179c-.9 0-1.717.564-2.037 1.405-.094.25-.142.511-.142.774v7.245l.084 1.441c.348 3.277 2.047 6.142 4.682 8.139.045.036.094.07.143.105l.03.023c1.411 1.03 2.989 1.728 4.694 2.072.786.158 1.591.24 2.389.24.739 0 1.481-.067 2.209-.204.088-.029.176-.045.264-.06.023 0 .049-.015.074-.029 1.633-.36 3.148-1.036 4.508-2.025l.029-.031.135-.105c2.627-1.995 4.324-4.862 4.686-8.148L24 10.678V3.445c0-.251-.031-.5-.121-.742l.017.01z'/></svg>"
    },
    "hackernews":{
        "name": "HackerNews",
        "api": "https://news.ycombinator.com/submitlink?u={{URL}}&t={{TITLE}}",
        "color": "#FF6D00",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' fill='currentColor'><path d='M4,4v42h42V4H4z M44,44H6V6h38V44z M42,8H8v34h34V8z M27,28v8h-4v-8l-7-13h3.18L25,25.19L30.82,15H34L27,28z'/></svg>"
    },
    "vk":{
        "name": "VK",
        "api": "http://vk.com/share.php?url={{URL}}",
        "color": "#1976D2",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor'><path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37.72,33l-3.73-0.01 c0,0-0.08,0.01-0.21,0.01c-0.3,0-0.92-0.08-1.65-0.58c-1.31-0.91-2.56-3.17-3.55-3.17c-0.07,0-0.13,0.01-0.19,0.03 c-0.86,0.27-1.12,1.13-1.12,2.18c0,0.37-0.26,0.54-0.96,0.54h-1.93c-2.16,0-4.25-0.05-6.6-2.62c-3.46-3.79-6.7-10.53-6.7-10.53 s-0.18-0.39,0.01-0.62c0.18-0.21,0.6-0.23,0.76-0.23c0.04,0,0.06,0,0.06,0h4c0,0,0.37,0.07,0.64,0.27c0.23,0.17,0.35,0.48,0.35,0.48 s0.68,1.32,1.53,2.81c1.43,2.46,2.2,3.28,2.75,3.28c0.09,0,0.18-0.02,0.27-0.07c0.82-0.45,0.58-4.09,0.58-4.09s0.01-1.32-0.42-1.9 c-0.33-0.46-0.96-0.59-1.24-0.63c-0.22-0.03,0.14-0.55,0.62-0.79c0.62-0.3,1.65-0.36,2.89-0.36h0.6c1.17,0.02,1.2,0.14,1.66,0.25 c1.38,0.33,0.91,1.62,0.91,4.71c0,0.99-0.18,2.38,0.53,2.85c0.05,0.03,0.12,0.05,0.21,0.05c0.46,0,1.45-0.59,3.03-3.26 c0.88-1.52,1.56-3.03,1.56-3.03s0.15-0.27,0.38-0.41c0.22-0.13,0.22-0.13,0.51-0.13h0.03c0.32,0,3.5-0.03,4.2-0.03h0.08 c0.67,0,1.28,0.01,1.39,0.42c0.16,0.62-0.49,1.73-2.2,4.03c-2.82,3.77-3.14,3.49-0.8,5.67c2.24,2.08,2.7,3.09,2.78,3.22 C39.68,32.88,37.72,33,37.72,33z'/></svg>"
    },
    "okru":{
        "name": "OKru",
        "api": "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={{URL}}",
        "color": "#e27e35",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='currentColor'><path d='M592.2 686.1c40.4-9.2 79.3-25.2 115.101-47.7 27.1-17.1 35.3-52.899 18.199-80.1-17.1-27.2-52.899-35.4-80.1-18.3-81.2 51.1-185.7 51-266.9 0-27.199-17.1-63-8.9-80.1 18.3-17.1 27.1-8.9 63 18.2 80.1 35.8 22.5 74.7 38.5 115.1 47.7L321 796.9c-22.699 22.699-22.699 59.399 0 82.1 11.4 11.3 26.2 17 41 17 14.9 0 29.7-5.7 41.101-17L512 770.1 620.9 879c22.7 22.7 59.4 22.7 82.1 0 22.7-22.7 22.7-59.5 0-82.1L592.2 686.1M512 244.2c45.301 0 82.101 36.8 82.101 82.1 0 45.2-36.8 82-82.101 82-45.199 0-82.1-36.8-82.1-82 0-45.3 36.901-82.1 82.1-82.1zm0 280.2c109.301 0 198.2-88.9 198.2-198.101C710.2 216.9 621.301 128 512 128c-109.3 0-198.199 88.9-198.199 198.2 0 109.3 88.899 198.2 198.199 198.2z'/></svg>"
    },
    "skype":{
        "name": "Skype",
        "api": "https://web.skype.com/share?url={{URL}}&text={{TITLE}}",
        "color": "#00aff0",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor'><path d='M 14.28125 0 C 6.410156 0 0 6.324219 0 14.09375 C 0 16.476563 0.621094 18.800781 1.78125 20.875 C 1.507813 22.3125 1.375 23.792969 1.375 25.25 C 1.375 38.25 12.074219 48.8125 25.25 48.8125 C 26.601563 48.8125 27.953125 48.722656 29.28125 48.5 C 31.257813 49.488281 33.480469 50 35.71875 50 C 43.589844 50 50 43.675781 50 35.90625 C 50 33.820313 49.539063 31.828125 48.65625 29.96875 C 48.976563 28.433594 49.15625 26.847656 49.15625 25.25 C 49.15625 12.253906 38.425781 1.6875 25.25 1.6875 C 24.011719 1.6875 22.761719 1.78125 21.53125 1.96875 C 19.335938 0.683594 16.847656 0 14.28125 0 Z M 25.09375 9.375 C 27.140625 9.375 28.933594 9.597656 30.4375 10.0625 C 31.945313 10.523438 33.222656 11.136719 34.21875 11.90625 C 35.226563 12.683594 35.996094 13.511719 36.46875 14.375 C 36.945313 15.246094 37.1875 16.132813 37.1875 16.96875 C 37.1875 17.777344 36.84375 18.484375 36.21875 19.125 C 35.59375 19.765625 34.808594 20.09375 33.875 20.09375 C 33.027344 20.09375 32.367188 19.898438 31.90625 19.5 C 31.476563 19.125 31.023438 18.554688 30.53125 17.71875 C 29.960938 16.648438 29.292969 15.777344 28.5 15.1875 C 27.730469 14.613281 26.421875 14.34375 24.65625 14.34375 C 23.015625 14.34375 21.675781 14.640625 20.6875 15.28125 C 19.730469 15.898438 19.28125 16.628906 19.28125 17.46875 C 19.28125 17.984375 19.441406 18.410156 19.75 18.78125 C 20.078125 19.171875 20.511719 19.496094 21.09375 19.78125 C 21.695313 20.078125 22.316406 20.332031 22.9375 20.5 C 23.574219 20.671875 24.660156 20.945313 26.125 21.28125 C 27.976563 21.675781 29.679688 22.089844 31.1875 22.5625 C 32.710938 23.046875 34.019531 23.652344 35.09375 24.34375 C 36.1875 25.046875 37.070313 25.949219 37.6875 27.03125 C 38.304688 28.113281 38.59375 29.441406 38.59375 31 C 38.589844 32.859375 38.066406 34.546875 37 36.03125 C 35.9375 37.511719 34.371094 38.703125 32.34375 39.53125 C 30.335938 40.351563 27.925781 40.75 25.1875 40.75 C 21.898438 40.75 19.148438 40.191406 17 39.0625 C 15.460938 38.246094 14.175781 37.117188 13.21875 35.75 C 12.242188 34.367188 11.75 33.011719 11.75 31.6875 C 11.75 30.863281 12.085938 30.152344 12.71875 29.5625 C 13.347656 28.984375 14.136719 28.6875 15.09375 28.6875 C 15.878906 28.6875 16.574219 28.914063 17.125 29.375 C 17.65625 29.816406 18.105469 30.472656 18.46875 31.3125 C 18.875 32.230469 19.308594 32.980469 19.78125 33.59375 C 20.226563 34.175781 20.863281 34.679688 21.6875 35.0625 C 22.515625 35.453125 23.652344 35.65625 25.03125 35.65625 C 26.925781 35.65625 28.460938 35.253906 29.625 34.46875 C 30.765625 33.703125 31.34375 32.785156 31.34375 31.65625 C 31.34375 30.765625 31.03125 30.046875 30.4375 29.5 C 29.8125 28.925781 28.992188 28.492188 28 28.1875 C 26.957031 27.871094 25.558594 27.519531 23.8125 27.15625 C 21.4375 26.652344 19.417969 26.046875 17.8125 25.375 C 16.167969 24.683594 14.84375 23.722656 13.875 22.53125 C 12.890625 21.316406 12.375 19.820313 12.375 18.03125 C 12.375 16.324219 12.902344 14.761719 13.9375 13.4375 C 14.957031 12.125 16.449219 11.105469 18.375 10.40625 C 20.273438 9.710938 22.539063 9.375 25.09375 9.375 Z'/></svg>"
    },
    "line":{
        "name": "Line",
        "api": "https://social-plugins.line.me/lineit/share?url={{URL}}",
        "color": "#50B84C",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor'><path d='M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z'/></svg>"
    },

}

const sbStylesheet = '.sb{width: auto;text-align: center}.sb_container{width: 100%;margin: auto;text-align: center;justify-content: center;overflow: auto !important;scrollbar-width: thin;background:#fff;}.sb .sb_container{display: inline-flex;margin: 0;padding: 0px}.sb_button .sb_link{display: flex;padding: 5px;transition: all 0.2s}.sb_button .sb_link svg{width: 28px}.sb_button .sb_link:hover{opacity: 0.7}.sb_16 .sb_button .sb_link svg{width: 16px}.sb_20 .sb_button .sb_link svg{width: 20px}.sb_24 .sb_button .sb_link svg{width: 24px}.sb_28 .sb_button .sb_link svg{width: 28px}.sb_32 .sb_button .sb_link svg{width: 32px}.sb_36 .sb_button .sb_link svg{width: 36px}.p0 .sb_button .sb_link{padding: 0px}.p5 .sb_button .sb_link{padding: 5px}.p10 .sb_button .sb_link{padding: 10px}.p_auto .sb_button .sb_label{padding: auto}.m0 .sb_button .sb_link{margin: 0px}.m2 .sb_button .sb_link{margin: 2px}.m3 .sb_button .sb_link{margin: 3px}.m5 .sb_button .sb_link{margin: 5px}.m10 .sb_button .sb_link{margin: 10px}.m_auto .sb_button .sb_label{margin: auto}.sb_circle .sb_button .sb_link{border-radius: 100%}.sb_square .sb_button .sb_link{border-radius: 5px}.floating_left{position: fixed;left: 0;top: calc(100vh / 6);vertical-align: middle;width: auto;transition: all 0.2s;z-index: 99999}.floating_left .sb_container{width: auto;display: block;padding: 0px;border-radius: 3px}.floating_left .sb_button{display: block}.floating_right{position: fixed;right: 0;top: calc(100vh / 6);vertical-align: middle;width: auto;transition: all 0.2s;z-index: 99999}.floating_right .sb_container{width: auto;display: block;padding: 0px;border-radius: 3px}.floating_right .sb_button{display: block}.floating_button{position: fixed;right: 0;bottom: calc(100vh / 7);margin-right: -70px;border-radius: 3px;background: #fff;box-shadow: 0px 0px 10px 1px #ccc9;z-index: 9999999;transition: all 0.2s;cursor: pointer}.floating_button .sb_container{width: auto;background: none;padding: 5px;border-radius: 2px}.floating_button .sb_container{display: block}.floating_toggle{position: fixed;bottom: 0;right: 0;margin-right: 20px;margin-bottom: 20px;height: 50px;width: 50px;border-radius: 100%;border: none;color: #fff;background: #ff5700;box-shadow: 0px 2px 10px 1px #ff570050;cursor: pointer;z-index: -33;transition: all 0.2s}.floating_toggle svg{width: 25px;height: 25px;margin-top: 2px}.floating_toggle:hover{opacity: 0.8}.floating_show{margin-right: 20px;transition: all 0.2s}';

/* load the stylesheet to the DOMDocument */
var styleElem = document.createElement("style");
styleElem.textContent = sbStylesheet;
var head = document.getElementsByTagName('head')[0].appendChild(styleElem);

/*
* run the script when window is ready.
*/
window.addEventListener("load", function(){

    /*
    * Preparing the meta information for sharing such as page url, page title, page description.
    */
    var pageTitle = document.title; /* current page title */
    var pageUrl = window.location.href; /* current page url */

    /*
    * Preparing the social sharing buttons config from the html element.
    * Attribute: (data-btn) for button config which button will display.
    * Attribute: (data-color) for button colors.
    * Attribute: (data-bg-color) for button background color.
    */
   function render_buttons(){
        const sbPlacement = document.getElementsByClassName("sb");
        var sbElement,floatingToggle;
        for (let i = 0; i < sbPlacement.length; i++) {

            sbElement = sbPlacement[i];
            var sbColor = sbElement.getAttribute("data-color");
            var sbBgColor = sbElement.getAttribute("data-bg-color");
            var sbBtn = sbElement.getAttribute("data-btn");
            sbBtn = sbBtn == null ? "all":sbBtn.toLowerCase();

            var sbOnlyBtn = [];

            /* check how many want to display */
            if( typeof sbBtn == 'undefined' || sbBtn === null || sbBtn =='' || sbBtn == 'all' )
            {
                /*
                * if (data-btn) attribute not set, empty, or value all then script will display
                * all social networks button. 
                */
                sbOnlyBtn.push('all');
            }else{

                /*
                * if (data-btn) attribute specify the social networks then script will display
                * the specified social networks button.
                */
            sbOnlyBtn.push(sbBtn.split(','));
            sbOnlyBtn = sbOnlyBtn[0];
            }


            /* if floating_button class exists then add a button element to toggle floating_button element */
            floatingToggle = sbElement.classList.contains('floating_button') == true ? '<button type="button" class="floating_toggle"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M36.35 44q-2.35 0-4.025-1.675Q30.65 40.65 30.65 38.3q0-.35.075-.825t.225-.875L15.8 27.8q-.75.85-1.85 1.375t-2.25.525q-2.35 0-4.025-1.675Q6 26.35 6 24q0-2.4 1.675-4.05T11.7 18.3q1.15 0 2.2.45 1.05.45 1.9 1.3l15.15-8.7q-.15-.35-.225-.8-.075-.45-.075-.85 0-2.4 1.675-4.05T36.35 4q2.4 0 4.05 1.65t1.65 4.05q0 2.35-1.65 4.025-1.65 1.675-4.05 1.675-1.15 0-2.225-.375Q33.05 14.65 32.3 13.8l-15.15 8.4q.1.4.175.925.075.525.075.875t-.075.75q-.075.4-.175.8l15.15 8.6q.75-.7 1.75-1.125 1-.425 2.3-.425 2.4 0 4.05 1.65t1.65 4.05q0 2.35-1.65 4.025Q38.75 44 36.35 44Zm0-31.6q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q37.5 7 36.35 7t-1.925.775q-.775.775-.775 1.925t.775 1.925q.775.775 1.925.775ZM11.7 26.7q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q12.85 21.3 11.7 21.3t-1.925.775Q9 22.85 9 24t.775 1.925q.775.775 1.925.775ZM36.35 41q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q37.5 35.6 36.35 35.6t-1.925.775q-.775.775-.775 1.925t.775 1.925Q35.2 41 36.35 41Zm0-31.3ZM11.7 24Zm24.65 14.3Z"/></svg></button>':'';
            
            /*
            * let's generate the social buttons and display them.
            */
            // sbElement.();
            sbElement.innerHTML = '<div class="sb_container">'+ generate_buttons( sbOnlyBtn, sbColor, sbBgColor)+'</div>' + floatingToggle;
        }
        /*
        * floating toggle button logic
        */

        var floating_toggle_button = document.querySelector(".floating_toggle");
        if( floating_toggle_button !== null ){
            floating_toggle_button.addEventListener("click", function(e){
                
                /* add class to floating_button */
                const floating_button = document.querySelector(".floating_button");
                if( typeof floating_button !== 'undefined' || floating_button !== null )
                {
                    if( floating_button.classList.contains('floating_show') == false)
                    {
                        floating_button.classList.add('floating_show');
                    }else{
                        floating_button.classList.remove('floating_show');
                    }
                }
            });
        }
    }render_buttons();
    /*
    * generate_buttons function will create the social buttons
    * @Param @Array sbButtonList the list of allowed button to display.
    * @Return @String
    */
    function generate_buttons( sbButtonList, sbColor = null, sbBgColor = null )
    {
        /* define some variable */
        var sbAPI,socialButtonArray = [],output = [];

        /* checking how many button they allowed. */
        if( sbButtonList[0] !== 'all' )
        {
            /* if they allowed only specific buttons to display. */
            sbButtonList.forEach(function(sb, offset){
                if( typeof sbButtonList[sb.name] !== 'undefined' ||  sbButtonList[sb.name] !== null)
                {
                    socialButtonArray.push(socialJson[sb]);
                }
            })
        }else{
            /* if they allowed all buttons to display. */
            Object.keys(socialJson).forEach(sb => {
                socialButtonArray.push(socialJson[sb]);
            });
        }

        /* 
        * loop socialButtonArray to create element. set color and apis to share
        * any webpage's to the social media network.
        */
        socialButtonArray.forEach(sbItem => {
            
            /* replace the api with page metadata such as page title, page url */
            sbAPI = sbItem.api.replace('{{TITLE}}', encodeURIComponent(pageTitle));
            sbAPI = sbAPI.replace('{{URL}}', pageUrl);

            /* styling the icons */
            var iconColor = '#FFFFFF',iconBgColor = '#222222';
            if( typeof sbColor !=='undefined' && sbColor != null && sbColor !='' )
            {
                /*
                * if no icon color present in the main placement element then it will set official color for the icons, or if official color is not present in object then default color will apply.
                */
            iconColor = sbColor;
            }
            if( typeof sbBgColor =='undefined' || sbBgColor === null || sbBgColor =='' )
            {
                /*
                * if no background color present in the main placement element then it will set official color as background for icons, or if official background color is not present in object then default background color will apply.
                */
                iconBgColor = sbItem.color =='#' || sbItem.color =='' ? iconBgColor:sbItem.color;
            }else{
                iconBgColor = sbBgColor;
            }
            
            /* preparing output */
            output += '<div class="sb_button sb_button_'+sbItem.name.toLowerCase()+'" data-sn="'+sbItem.name.toLowerCase()+'"><a href="'+sbAPI+'" title="'+sbItem.name+'" class="sb_link" target="_blank" style="color:'+iconColor+';background:'+iconBgColor+'" rel="nofollow">'+sbItem.icon+'</a></div>';

        });
        return output;

       

    }/* end of social buttons function. */

/* google analytics event handeler */
function sendEvent( events, eventName = 'share' )
{
    if( typeof gtag == 'function' ){
        if(typeof events == 'object' || !Array.isArray( events ) || events !== null )
        {
            gtag( 'event', eventName, events );
        }
    }
}

/*
* sharing button link click handler.
*/
document.querySelectorAll("a.sb_link").forEach(sb_link => {
    sb_link.addEventListener("click", (e) => {
        /* event object for google analytics. */
        var eventForSend = {
            'page_title':pageTitle,
        };
        sendEvent(eventForSend, sb_link.getAttribute("title"));
    })
});

    /* 
    * left and right side fixed floating social buttons controller logic for smallest screen such as mobile, tablet etc.
    * If left or right floating button found is this current window then it change the class name and re render
    * all social button again when screen width size get below 640px; 
    */

    function getWidth() { return window.innerWidth; }

    var fltLeft,fltRight,fltButton,hasFixedFloating = false,hasFloatingButton = false;

    fltRight = document.querySelector('.floating_right');
    fltLeft = document.querySelector('.floating_left');
    hasFixedFloating = fltLeft != null || fltRight != null ? true:false;
    hasFloatingButton = document.querySelector('.floating_button') != null ? true:false;

    if(hasFloatingButton == true && hasFixedFloating == true)
    {
        /* initial display logic */
        if( fltLeft !== null ){
            getWidth() < 640 ? fltLeft.style.marginLeft='-100px':fltLeft.style.marginLeft='0px';
        }
        if( fltRight !== null )
        {
            getWidth() < 640 ? fltRight.style.marginRight='-100px':fltRight.style.marginRight='0px';
        }
        window.addEventListener('resize', () => {

            if( fltLeft !== null ){
                getWidth() < 640 ? fltLeft.style.marginLeft='-100px':fltLeft.style.marginLeft='0px';
            }
            if( fltRight !== null )
            {
                getWidth() < 640 ? fltRight.style.marginRight='-100px':fltRight.style.marginRight='0px';
            }
        })

    }
    /* 
    * Switch automaticlly from fixedFloating to floatingButton when user screen width below 640px; 
    * Then all sbPlacement re-render again.
    */
    if(hasFloatingButton == false && hasFixedFloating == true)
    {
        /* FixedFloating to FloatingButton switcing function, and social icon re generator. */
        function ff2fb(fltElem, elemClass)
        {   
            if( fltElem !== null && hasFloatingButton == false && getWidth() < 640){
                fltElem.classList.remove(elemClass);
                fltElem.classList.add("floating_button");
                render_buttons();
            }else{
                fltElem.classList.remove("floating_button");
                fltElem.classList.add(elemClass);
                render_buttons();
            }
        }

        /* initial display */
        fltLeft != null && fltRight === null ? ff2fb(fltLeft, "floating_left"):'';
        fltRight != null && fltLeft === null ? ff2fb(fltRight, "floating_right"):'';
        window.addEventListener('resize', () => {
            fltLeft != null && fltRight === null ? ff2fb(fltLeft, "floating_left"):'';
            fltRight != null && fltLeft === null ? ff2fb(fltRight, "floating_right"):'';
        });

    }


})/* end main window addEventListener */
