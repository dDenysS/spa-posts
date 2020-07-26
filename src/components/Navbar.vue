<template>
	<div>
		<nav>
			<!-- <router-link to="/">Home</router-link> -->
			<ul>
				<router-link tag="li" to="/postcreate">
					<a href="#">Create Post</a>
				</router-link>
				<router-link tag="li" to="/" exact>
					<a href="#">Posts</a>
				</router-link>
				<router-link  to="/post/:id" >	
					<a href="#"></a>
				</router-link>
			
				<router-link tag="li" to="/users">
					<a href="#">Users</a>
				</router-link>
					
			</ul>
		</nav>
	</div>
</template>