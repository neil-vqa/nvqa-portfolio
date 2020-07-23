Home = Vue.component('home', {
	delimiters: ["[[","]]"],
	template: `
		<div class="section" id="home">
			<div class="row section">
				<div class="col s12 m8 offset-m2 hide-on-small-and-down">
					<img src="/static/neilvqa_logo.png" class="responsive-img" style="width: 30%;"/>
					<br /><br /><br /><br />
					<h1>NEIL VAN ALIÑO</h1>
					<h2 class="text-mute">full stack web developer</h2>
				</div>
				<div class="col s12 m8 offset-m2 hide-on-med-and-up">
					<img src="/static/neilvqa_logo.png" class="responsive-img logo" style="width: 50%;"/>
					<br /><br />
					<h6>NEIL VAN ALIÑO</h6>
					<h6 class="text-mute">full stack web developer</h6>
				</div>
			</div>
		</div>
	`
})

About = Vue.component('about', {
	delimiters: ["[[","]]"],
	template: `
		<div class="section" id="about">
			<div class="row section">
				<div class="col s12 m8 offset-m2 hide-on-small-and-down">
					<h1 class="center">About</h1>
					<br />
					<p class="par-text">
						I am a Web Developer + DataViz Specialist who is also a Mechanical Engineer from the Philippines.
						The <a class="text-highlight light-blue lighten-3">critical, disciplined, and holistic mindset</a> molded by engineering has lead me to venture into
						data visualization and web development. 
					</p><br />
					<p class="par-text">
						For the past 2 years after graduating, I have worked partly (and mixedly) as a freelance 
						<a class="text-highlight light-blue lighten-3">data visualizer, engineering consultant, and CAD modeler</a>. 
						I am a team player by nature and also reliable and effective in working independently. 
					</p><br />
					<p class="par-text">
						I am currently a full stack web developer. I do my projects with <a class="text-highlight light-blue lighten-3">Python</a> as backend, and
						<a class="text-highlight light-blue lighten-3">Vue.js components</a> on the frontend. (+ Materialize/Bootstrap)
					</p><br />
					<p class="par-text">
						I am a cofounder of <a href="https://hulagway.site/" target="_blank" class="text-highlight light-blue lighten-3">Hulagway.site</a>, 
						a website providing free stock photos, and a platform 
						for local photography newcomers to showcase their skill and be discovered. I am also acting 
						as the webmaster and lead web developer of the site. 
					</p><br />
					<p class="par-text">
						Lastly, I am an <a class="text-highlight light-blue lighten-3">international volunteer</a> helping all sorts of people to learn and benefit from God's Word. 
					</p>
				</div>
				<div class="col s12 m8 offset-m2 hide-on-med-and-up">
					<h5 class="center">About</h5>
					<br />
					<p class="par-text-sm">
						I am a Web Developer + DataViz Specialist who is also a Mechanical Engineer from the Philippines.
						The <a class="text-highlight light-blue lighten-3">critical, disciplined, and holistic mindset</a> molded by engineering has lead me to venture into
						data visualization and web development. 
					</p><br />
					<p class="par-text-sm">
						For the past 2 years after graduating, I have worked partly (and mixedly) as a freelance 
						<a class="text-highlight light-blue lighten-3">data visualizer, engineering consultant, and CAD modeler</a>. 
						I am a team player by nature and also reliable and effective in working independently. 
					</p><br />
					<p class="par-text-sm">
						I am currently a full stack web developer. I do my projects with <a class="text-highlight light-blue lighten-3">Python</a> as backend, and
						<a class="text-highlight light-blue lighten-3">Vue.js components</a> on the frontend. (+ Materialize/Bootstrap)
					</p><br />
					<p class="par-text-sm">
						I am a cofounder of <a href="https://hulagway.site/" target="_blank" class="text-highlight light-blue lighten-3">Hulagway.site</a>, 
						a website providing free stock photos, and a platform 
						for local photography newcomers to showcase their skill and be discovered. I am also acting 
						as the webmaster and lead web developer of the site. 
					</p><br />
					<p class="par-text-sm">
						Lastly, I am an <a class="text-highlight light-blue lighten-3">international volunteer</a> helping all sorts of people to learn and benefit from God's Word. 
					</p>
				</div>
			</div>
		</div>
	`
})

Skills = Vue.component('skills', {
	delimiters: ["[[","]]"],
	template: `
		<div class="section" id="skills">
			<div class="row section">
				<div class="col s12 m10 offset-m1 hide-on-small-and-down">
					<h1 class="center">Skills</h1>
					<br />
					<div class="col s12 m4">
						<h5 class="center text-highlight">Data Visualization</h5>
						<ul class="center par-text">
							<li>Plotly</li>
							<li>Matplotlib</li>
							<li>Seaborn</li>
							<li>Dash</li>
							<li>Streamlit</li>
							<li>Mapbox</li>
							<li>Pandas</li>
							<li>Numpy</li>
							<li>Jupyter</li>
							<li>MS Excel</li>
						</ul>
					</div>
					<div class="col s12 m4">
						<h5 class="center text-highlight">Web Development</h5>
						<p class="center par-text"><u>Backend</u></p>
						<ul class="center par-text">
							<li>Django</li>
							<li>Django REST</li>
							<li>Flask</li>
							<li>NGINX </li>
							<li>Linode</li>
							<li>Netlify</li>
							<li>Heroku</li>
						</ul>
						<p class="center par-text"><u>Frontend</u></p>
						<ul class="center par-text">
							<li>Materialize</li>
							<li>Bootstrap</li>
							<li>Vue.js components</li>
						</ul>
						<p class="center par-text"><u>Tech Stack</u></p>
						<ul class="center par-text">
							<li>Django + Vue.js components</li>
						</ul>
					</div>
					<div class="col s12 m4">
						<h5 class="center text-highlight">Engineering</h5>
						<p class="center par-text"><u>3D Modeling</u></p>
						<ul class="center par-text">
							<li>Solidworks</li>
							<li>AutoCAD</li>
							<li>3DS Max</li>
							<li>Vray</li>
						</ul>
						<h6 class="center text-highlight">Other Relevant Skills</h6>
						<ul class="center par-text">
							<li>Git</li>
							<li>Photoshop</li>
							<li>Krita</li>
							<li>Inkscape</li>
							<li>Virtual Assistance</li>
							<li>Public Speaking</li>
						</ul>
					</div>
				</div>
				<div class="col s12 m8 offset-m2 hide-on-med-and-up">
					<h5 class="center">Skills</h5>
					<br />
					<div class="col s12 m4">
						<h6 class="center text-highlight">Data Visualization</h6>
						<ul class="center par-text-li">
							<li>Plotly</li>
							<li>Matplotlib</li>
							<li>Seaborn</li>
							<li>Dash</li>
							<li>Streamlit</li>
							<li>Mapbox</li>
							<li>Pandas</li>
							<li>Numpy</li>
							<li>Jupyter</li>
							<li>MS Excel</li>
						</ul>
					</div>
					<div class="col s12 m4">
						<h6 class="center text-highlight">Web Development</h6>
						<p class="center par-text-li"><u>Backend</u></p>
						<ul class="center par-text-li">
							<li>Django</li>
							<li>Django REST</li>
							<li>Flask</li>
							<li>NGINX </li>
							<li>Linode</li>
							<li>Netlify</li>
							<li>Heroku</li>
						</ul>
						<p class="center par-text-li"><u>Frontend</u></p>
						<ul class="center par-text-li">
							<li>Materialize</li>
							<li>Bootstrap</li>
							<li>Vue.js components</li>
						</ul>
						<p class="center par-text-li"><u>Tech Stack</u></p>
						<ul class="center par-text-li">
							<li>Django + Vue.js components</li>
						</ul>
					</div>
					<div class="col s12 m4">
						<h6 class="center text-highlight">Engineering</h6>
						<p class="center par-text-li"><u>3D Modeling</u></p>
						<ul class="center par-text-li">
							<li>Solidworks</li>
							<li>AutoCAD</li>
							<li>3DS Max</li>
							<li>Vray</li>
						</ul>
						<h6 class="center text-highlight">Other Relevant Skills</h6>
						<ul class="center par-text-li">
							<li>Git</li>
							<li>Photoshop</li>
							<li>Krita</li>
							<li>Inkscape</li>
							<li>Virtual Assistance</li>
							<li>Public Speaking</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`
})

Projects = Vue.component('projects', {
	delimiters: ["[[","]]"],
	template: `
		<div class="section" id="projects">
			<div class="row section">
				<div class="col s12 m10 offset-m1 hide-on-small-and-down">
					<h1 class="center">Projects</h1>
					<br />
					<p class="par-text-li center">Clicking an item will open a new tab that will take you to the website/web app.</p>
					<p class="par-text-li center">You may also check my
					<a href="https://neil-vqa.github.io/data-viz/" target="_blank" class="text-highlight"><u>old portfolio site</u></a>
					 which mostly features data visualiations (web apps & print-ready). 
					 <a href="https://neil-vqa.github.io/data-viz/" target="_blank" class="text-highlight"><u>Go to old portfolio site.</u></a>
					 </p>
					<br />
					<div class="center">
						<a class="project-chip" href="https://howto-story.herokuapp.com/" target="_blank"><img src="/media/hts-shot.webp"></img></a>
						<a class="project-chip" href="https://hulagway.site/" target="_blank"><img src="/media/hulagway.webp"></img></a>
						<a class="project-chip" href="https://coffee-domus-meae.netlify.app/" target="_blank"><img src="/media/coffee-domus.webp"></img></a>
						<a class="project-chip" href="https://storeisopen-backend.herokuapp.com/" target="_blank"><img src="/media/storeopen.webp"></img></a>
						<a class="project-chip" href="https://demver-barbers.netlify.app/" target="_blank"><img src="/media/demver-barbers.webp"></img></a>
						<a class="project-chip" href="https://zweddings.netlify.app/" target="_blank"><img src="/media/zwed-shot.webp"></img></a>
						<a class="project-chip" href="https://pamaligya.netlify.app/" target="_blank"><img src="/media/pamaligya-shot.webp"></img></a>
						<a class="project-chip" href="https://laagan-travels.netlify.app/" target="_blank"><img src="/media/travel-shot.webp"></img></a>
						<a class="project-chip" href="https://wolfin-techs.firebaseapp.com/" target="_blank"><img src="/media/wolfin-shot.webp"></img></a>
						<a class="project-chip" href="https://musicorum-headphones.netlify.app/" target="_blank"><img src="/media/musicorum.webp"></img></a>
						<a class="project-chip" href="https://executive-desk.herokuapp.com/" target="_blank"><img src="/media/exec-1.webp"></img></a>
						<a class="project-chip" href="https://eruption-explorer.herokuapp.com/" target="_blank"><img src="/media/erupt-xplor.webp"></img></a>
						<a class="project-chip" href="https://orange-dash.herokuapp.com/" target="_blank"><img src="/media/ora-1.webp"></img></a>
						<a class="project-chip" href="https://partner-survey.herokuapp.com/" target="_blank"><img src="/media/partners_interact.webp"></img></a>
						<a class="project-chip" href="https://stock-dash-flat-ver.herokuapp.com/" target="_blank"><img src="/media/stock_dash_shot.webp"></img></a>
						<a class="project-chip" href="https://sunshine-dash-app.herokuapp.com/" target="_blank"><img src="/media/sunshine-dash.webp"></img></a>
						<a class="project-chip" href="https://yt-data-view.herokuapp.com/" target="_blank"><img src="/media/yt1.webp"></img></a>
						<a class="project-chip" href="https://covid19-dashboard.herokuapp.com/home" target="_blank"><img src="/media/covid-shot.webp"></img></a>
						<a class="project-chip" href="https://phl-retail-commodity.herokuapp.com/" target="_blank"><img src="/media/commodity.webp"></img></a>
						<a class="project-chip" href="https://airbnb-tokyo.herokuapp.com/" target="_blank"><img src="/media/airbnb_shot.webp"></img></a>	
					</div>
				</div>
				<div class="col s12 m8 offset-m2 hide-on-med-and-up">
					<h5 class="center">Projects</h5>
					<br />
					<p class="par-text-li center">Clicking an item will open a new tab that will take you to the website/web app.</p>
					<p class="par-text-li center">You may also check my
					<a href="https://neil-vqa.github.io/data-viz/" target="_blank" class="text-highlight"><u>old portfolio site</u></a>
					 which mostly features data visualiations (web apps & print-ready). 
					 <a href="https://neil-vqa.github.io/data-viz/" target="_blank" class="text-highlight"><u>Go to old portfolio site.</u></a>
					 </p>
					<br />
					<div class="center">
						<a class="project-chip" href="https://howto-story.herokuapp.com/" target="_blank"><img src="/media/hts-shot.webp"></img></a>
						<a class="project-chip" href="https://hulagway.site/" target="_blank"><img src="/media/hulagway.webp"></img></a>
						<a class="project-chip" href="https://coffee-domus-meae.netlify.app/" target="_blank"><img src="/media/coffee-domus.webp"></img></a>
						<a class="project-chip" href="https://storeisopen-backend.herokuapp.com/" target="_blank"><img src="/media/storeopen.webp"></img></a>
						<a class="project-chip" href="https://demver-barbers.netlify.app/" target="_blank"><img src="/media/demver-barbers.webp"></img></a>
						<a class="project-chip" href="https://zweddings.netlify.app/" target="_blank"><img src="/media/zwed-shot.webp"></img></a>
						<a class="project-chip" href="https://pamaligya.netlify.app/" target="_blank"><img src="/media/pamaligya-shot.webp"></img></a>
						<a class="project-chip" href="https://laagan-travels.netlify.app/" target="_blank"><img src="/media/travel-shot.webp"></img></a>
						<a class="project-chip" href="https://wolfin-techs.firebaseapp.com/" target="_blank"><img src="/media/wolfin-shot.webp"></img></a>
						<a class="project-chip" href="https://musicorum-headphones.netlify.app/" target="_blank"><img src="/media/musicorum.webp"></img></a>
						<a class="project-chip" href="https://executive-desk.herokuapp.com/" target="_blank"><img src="/media/exec-1.webp"></img></a>
						<a class="project-chip" href="https://eruption-explorer.herokuapp.com/" target="_blank"><img src="/media/erupt-xplor.webp"></img></a>
						<a class="project-chip" href="https://orange-dash.herokuapp.com/" target="_blank"><img src="/media/ora-1.webp"></img></a>
						<a class="project-chip" href="https://partner-survey.herokuapp.com/" target="_blank"><img src="/media/partners_interact.webp"></img></a>
						<a class="project-chip" href="https://stock-dash-flat-ver.herokuapp.com/" target="_blank"><img src="/media/stock_dash_shot.webp"></img></a>
						<a class="project-chip" href="https://sunshine-dash-app.herokuapp.com/" target="_blank"><img src="/media/sunshine-dash.webp"></img></a>
						<a class="project-chip" href="https://yt-data-view.herokuapp.com/" target="_blank"><img src="/media/yt1.webp"></img></a>
						<a class="project-chip" href="https://covid19-dashboard.herokuapp.com/home" target="_blank"><img src="/media/covid-shot.webp"></img></a>
						<a class="project-chip" href="https://phl-retail-commodity.herokuapp.com/" target="_blank"><img src="/media/commodity.webp"></img></a>
						<a class="project-chip" href="https://airbnb-tokyo.herokuapp.com/" target="_blank"><img src="/media/airbnb_shot.webp"></img></a>	
					</div>
				</div>
			</div>
		</div>
	`
})

Contact = Vue.component('contact', {
	delimiters: ["[[","]]"],
	template: `
		<div class="section" id="contact">
			<div class="row section">
				<div class="col s12 m8 offset-m2 hide-on-small-and-down">
					<h1 class="center">Contact</h1>
					<br />
					<div class="col s12 m4 offset-m1">
						<h5 class="center text-highlight">Profiles</h5>
						<div class="center par-text">
							<p class="card-title">GitHub</p>
							<p><a href="https://github.com/neil-vqa" target="_blank">/neil-vqa</a></p>
						</div>
						<div class="center par-text">
							<p class="card-title">Upwork</p>
							<p><a href="https://www.upwork.com/o/profiles/users/~0169060d088879731f/?s=1110580755107926016" target="_blank">Neil Van A.</a></p>
						</div>
						<div class="center par-text">
							<p class="card-title">LinkedIn</p>
							<p><a href="https://www.linkedin.com/in/neilvan-qa/" target="_blank">/neilvan-qa</a></p>
						</div>
					</div>
					<div class="col s12 m6 offset-m1">
						<h5 class="center text-highlight">Email</h5>
						<div>
							<p class="card-title par-text">Email to nvqa.business@gmail.com</p>
							<form name='Contact-Me-Form' class='section' action="https://formspree.io/mbjzzwjy" method="POST">
								<div class="input-field">
								  <i class="material-icons prefix grey-text text-darken-1">person</i>
								  <input type="text" id="name" name="Name" required>
								  <label for="name">Your Name</label>
								</div>
								<div class="input-field">
								  <i class="material-icons prefix grey-text text-darken-1">email</i>
								  <input type="email" id="email" name="Email" class="validate" required>
								  <label for="email">Your Email</label>
								</div>
								<div class="input-field">
								  <i class="material-icons prefix grey-text text-darken-1">note_add</i>
								  <textarea id="textarea1" class="materialize-textarea" name="Message" required></textarea>
								  <label for="textarea1">Your concerns...</label>
								</div>
								<div class="input-field center">
									<button type="submit" class="light-blue btn-large z-depth-0">Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col s12 m8 offset-m2 hide-on-med-and-up">
					<h5 class="center">Contact</h5>
					<br />
					<div class="col s12 m4 offset-m1">
						<h6 class="center text-highlight">Profiles</h6>
						<div class="center par-text-li">
							<p class="card-title">GitHub</p>
							<p><a href="https://github.com/neil-vqa" target="_blank">/neil-vqa</a></p>
						</div>
						<div class="center par-text-li">
							<p class="card-title">Upwork</p>
							<p><a href="https://www.upwork.com/o/profiles/users/~0169060d088879731f/?s=1110580755107926016" target="_blank">Neil Van A.</a></p>
						</div>
						<div class="center par-text-li">
							<p class="card-title">LinkedIn</p>
							<p><a href="https://www.linkedin.com/in/neilvan-qa/" target="_blank">/neilvan-qa</a></p>
						</div>
					</div>
					<div class="col s12 m6 offset-m1">
						<h6 class="center text-highlight">Email</h6>
						<div>
							<p class="card-title par-text-sm">To: nvqa.business@gmail.com</p>
							<form name='Contact-Me-Form' class='section' action="https://formspree.io/mbjzzwjy" method="POST">
								<div class="input-field">
								  <i class="material-icons prefix grey-text text-darken-1">person</i>
								  <input type="text" id="name" name="Name" required>
								  <label for="name">Your Name</label>
								</div>
								<div class="input-field">
								  <i class="material-icons prefix grey-text text-darken-1">email</i>
								  <input type="email" id="email" name="Email" class="validate" required>
								  <label for="email">Your Email</label>
								</div>
								<div class="input-field">
								  <i class="material-icons prefix grey-text text-darken-1">note_add</i>
								  <textarea id="textarea1" class="materialize-textarea" name="Message" required></textarea>
								  <label for="textarea1">Your concerns...</label>
								</div>
								<div class="input-field center">
									<button type="submit" class="light-blue btn-large z-depth-0">Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})



const routes = [
	{component: Home, path: '/'},
	{component: About, path: '/about/'},
	{component: Skills, path: '/skills/'},
	{component: Projects, path: '/projects/'},
	{component: Contact, path: '/contact/'},	
]

const router = new VueRouter({
	mode: 'history',
	routes: routes,
})

var app = new Vue({
	router,
	delimiters: ["[[","]]"],
	el: '#vapp',
	
})
