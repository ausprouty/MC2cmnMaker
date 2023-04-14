<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>11.1.</h1></div>
                        <div class="chapter_title ltr"><h1>使用《四件事》的好处以及如何分享</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2 class="forward">使用《四件事》的好处</h2>

<ul class="forward">
	<li class="forward">它既简易又完整。</li>
	<li class="forward">可以用来打开话题。你只要问&ldquo;您听过《四个属灵的定律》吗？&rdquo;大多数人会回答没有，接下来你就可以继续和他读这小册子。</li>
	<li class="forward">它从积极正面开始&mdash;&mdash;&ldquo;神爱你&hellip;&hellip;&rdquo;。</li>
	<li class="forward">它清楚解释怎样接受基督。</li>
	<li class="forward">它包含了邀请接受基督的机会。</li>
	<li class="forward">它提供了属灵生命长进的建议，并说明加入教会的重要性。</li>
	<li class="forward">它使你有把握，因为你知道要说些什么，又知道怎样说出来。</li>
	<li class="forward">你能在短时间内告诉人怎样接受基督。读《四件事》时不要加上不必要的解释，但要圣灵带领你。</li>
	<li class="forward">传讲时要友善，必要时回答他问题。读小册子时，可让对方读两，三节经文。</li>
	<li class="forward">它是一种可传递的方法，可以用来训练别人为基督作见证。</li>
</ul>

<h2 class="forward">如何分享《四件事》</h2>

<ul class="forward">
	<li class="forward">最简单的方法，就是照着小册子所写的逐字读出来。</li>
	<li class="forward">绝不强迫任何人接受基督。</li>
	<li class="forward">如果对方提出离题的问题时，要记住；大多数的问题在你读完《四件事》后，会得到解答的。你可以说：&ldquo;这是个很好的问题，让我们继续看完这本小册子，再来讨论它。&rdquo;如果他的问题在谈完《四件事》后仍未得到解答，你再回答他。</li>
	<li class="forward">传讲耶稣基督，应该是基督徒生活中很自然的一部份。</li>
	<li class="forward">记住，惟有圣灵才能感动人接受基督。</li>
	<li class="forward">如果对方似乎没有什么反应，可稍停，问他：&ldquo;这对你有帮助（意义）吗？&rdquo;</li>
	<li class="forward">手拿《四件事》时要让对方看得清楚。用一支笔指在重点处，可以帮助他集中注意力。</li>
	<li class="forward">你若向一小群人传福音，给每人一本《四件事》。与那些愿意接受基督的人一起祷告，若只有一个人感兴趣，想办法与他单独谈。</li>
	<li class="forward">必须确定每个人都了解，是凭着信心基督进入他们心中并赦免他们的罪。他若照着《四件事》的祷告文祷告，却不相信基督赦免他们的罪，就不会有果效。</li>
	<li class="forward">要敏锐对方是否要默默祷告接受基督。有些人会不好意思出声祷告。</li>
	<li class="forward">如果对方已经听过《四件事》，问他对《四件事》的感想或有任何的问题。若是他感兴趣，但对福音仍然不清楚，可以再一次与他分享《四件事》。不要怕向同一个人多次分享《四件事》。</li>
	<li class="forward">当你与人第一次分享时，他若没有接受基督，你可以告诉他你以后随时都愿意与他分享。
	<ul class="forward">
		<li class="forward">若他感兴趣，可与他再约时间见面，并送给他一份《被圣灵充满》小册子。</li>
		<li class="forward">为他祷告。当你们再见面时，问他有没有进一步思想你们所谈过的内容，或者有什么疑问。</li>
	</ul>
	</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->