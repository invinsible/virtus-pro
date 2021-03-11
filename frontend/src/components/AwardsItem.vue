<template>
 <li class="awards__item">
  <div class="awards__wrap awards__wrap--first">
    <div class="awards__logo"> <img :src="logo" alt=""> </div>
    <div class="awards__game"> <div class="label">{{game}}</div> </div>
  </div>
  <div class="awards__wrap awards__wrap--second">
    <p class="awards__rate"><b>{{rate}}</b> <span>место</span></p>
    <p class="awards__tournament"> {{tournament}} </p>
    <p class="awards__place">{{place}}</p>
  </div>            
  <div class="awards__wrap awards__wrap--third">
    <p class="awards__date">{{date}} <small>{{dateEnd}}</small></p>
    <p class="awards__money">${{money}}</p>
  </div>            
</li>
</template>

<script>
export default {
  props: {
    logo: String,
    game: String,
    rate: Number,
    tournament: String,
    place: String,
    date: String,
    dateEnd: [String, Number],
    money: Number
  }  
}
</script>