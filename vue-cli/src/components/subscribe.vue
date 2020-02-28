<template>
  <div class="subscibe">
    <div class="subscribe_left">
      <div class="pic">
        <img src="img/pic-of-per.png" alt="">
      </div>
      <div class="text_subs">
        <p class="comment_subsc">{{comments[selectedCommentId].commentText}}</p>
        <p class="name">
          {{comments[selectedCommentId].authorName}}</p>
        <p class="place">{{comments[selectedCommentId].authorCountry}}</p>
        <div class="options">
          <div :class="{pink: selectedCommentId+1 === comment.commentId}"  v-for="comment in comments" :key="comment.commentId" @click="selectedCommentId=comment.commentId - 1" class="option"></div>
        </div>
      </div>

    </div>
    <div class="subscibe_right">

      <div class="sub_head">
        <p class="sub_big">Subscribe</p>
        <p class="sup_text">FOR OUR NEWLETTER AND PROMOTION</p>
      </div>
      <div class="form_sub">
        <form @submit.prevent="addSubscribtion">
          <input type="email" placeholder="Enter Your Email" class="email_input" v-model:value="subscribeEmail">
          <input  type="submit" value="Subscribe" class="button_sub btnWhiteEffects">
        </form>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "subscribe",
      data(){
          return{
            subscribeEmail: "",
            selectedCommentId: 0,
            comments: [
              {
                commentId:1,
                commentText:"1 Vestibulum quis porttitor dui! " +
                  "Quisque viverra nunc mi,a pulvinar purus " +
                  "condimentum a. Aliquam condimentum mattis neque sed pretium",
                authorName: "Bin Burhan",
                authorCountry: "Dhaka, Bd"
              },
              {
                commentId:2,
                commentText:"2 Vestibulum quis porttitor dui! " +
                  "Quisque viverra nunc mi,a pulvinar purus " +
                  "condimentum a. Aliquam condimentum mattis neque sed pretium",
                authorName: "Bin Burhan",
                authorCountry: "Dhaka, Bd"
              },
              {
                commentId:3,
                commentText:"3 Vestibulum quis porttitor dui! " +
                  "Quisque viverra nunc mi,a pulvinar purus " +
                  "condimentum a. Aliquam condimentum mattis neque sed pretium",
                authorName: "Bin Burhan",
                authorCountry: "Dhaka, Bd"
              }

            ]
          }

      },
      methods: {
        addSubscribtion(){

          alert(`Ваш email  ${this.subscribeEmail} был подписан на обновления`)
        }
      }

    }
</script>

<style scoped>
.pink{
  background-color: #f16d7f;
}
</style>