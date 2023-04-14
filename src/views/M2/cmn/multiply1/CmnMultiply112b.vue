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
                        <div class="chapter_number ltr"><h1>12.2.</h1></div>
                        <div class="chapter_title ltr"><h1>如何挑战人举办一场聚会</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <ul class="forward">
	<li class="forward">你可以使用以下的范例，来跟一位有潜力用视频在家举办&ldquo;福音性聚会&rdquo;的主办人（和平之子）对话。跟这个人打过招呼后，你可以说：</li>
</ul>

<h2 class="forward">范例一</h2>

<p class="indent">&ldquo;很高兴我们能成为主里的弟兄姊妹，相信我们身边还没认识主的人也同样需要祂，最近我想要邀请一些人到家里，观看视频并有一起讨论的时间，这视频是有关盼望和自由的主题。我能给你看个影片的范例吗？&rdquo;</p>

<p class="indent">（用手机播放一部范例视频，让他们知道大概是什么）</p>

<p class="indent">&ldquo;你觉得你的家人或朋友们，谁会有兴趣一起观看，并讨论像这样的影片吗？</p>

<p class="indent">这聚会大约1到1.5个小时，我们会看两部关于＿＿＿＿＿＿(主题)的影片并一起讨论，然后我会分享耶稣如何在＿＿＿＿＿＿(主题)上帮助了我。</p>

<p class="indent">你有兴趣举办一场像这样的聚会吗？&rdquo;</p>

<p class="indent">（如果他们愿意举办，确认他们会照《筹备清单》的细节来执行。）</p>

<p class="indent">&nbsp;</p>

<ul class="forward">
	<li class="forward">挑战弟兄姐妹开放自己的家庭举办福音聚会，邀请非信徒朋友来到自己的家中：</li>
</ul>

<h2 class="forward">范例二</h2>

<p class="indent">&ldquo;XX弟兄/姐妹，感谢神，这段时间看到你爱神的心，并为身边的亲友祷告多时。再过3周就是圣诞节了，不晓得你是否愿意开放家庭举办一个圣诞party？</p>

<p class="indent">现代的圣诞节已经被商业化了，除了吃喝玩乐，互送礼物，狂欢之后，又能如何呢？今年的圣诞，让我们为他们预备一个不一样的圣诞，既能让亲朋好友到你的家聚聚，又能与他们分享主耶稣，让他们有机会认识并接受这位圣诞真正的主角&mdash;&mdash;耶稣。</p>

<p class="indent">你觉得如何？&rdquo;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->