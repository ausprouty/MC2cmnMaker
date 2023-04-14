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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-tot2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.1.</h1></div>
                        <div class="chapter_title ltr"><h1>教练圈场景</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="content ltr">
<p>场景1：没有圣洁生活见证的传福音<br />
在你教练圈里有一个人正在带领2个倍增小组。一个小组的成员在事工中非常活跃。他经常与人谈论耶稣，报告也很令人鼓舞。但是，他保有不良的习惯。在生活中还是喝酒和抽烟，甚至有时喝得烂醉。倍增小组中的其他成员因他的行为而感失望，并且偶尔加入他的饮酒行列。在这种情况下，你可以使用哪些经文来指导呢？</p>

<p><br />
场景2：没有遵行所教导的<br />
在你教练圈中有个成员带领一个倍增小组。该小组已经开始几个月了。当小组成立时，小组成员非常积极操练祷告，关怀和分享。现在组员缓慢下来了。在过去一个月中，成员不再执行&ldquo;届时我会&rdquo;的声明。一些组员也停止聚会。在这种情况下，你可以使用哪些经文来指导？</p>

<p><br />
场景3：认识了基督却不愿工作的学生<br />
在你教练圈中的一个成员正带领一个由学生和年轻专业人士刚组成的家庭教会。一个学生有经济需要，经常从其他成员那里要钱。他没有工作，因为他说他太忙于学校的学习。有一天，他向教会求助，帮助他支付学费和生活费。在这种情况下，你可以使用哪些经文来指导？</p>

<p><br />
场景4：有几个妻子的穆斯林想要当领袖<br />
在你教练圈里有一个成员有一位穆斯林背景的信徒。八个月前他信了耶稣，他的生活发生巨大的改变。他忠实地向其他穆斯林作见证，并带领许多人归向基督。实际上，他自己在带领2个倍增小组，并展现领导的潜能。然而，他有两个妻子，她们都接受了基督。在这种情况下，你可以使用哪些经文来指导</p>

&nbsp;
</div>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->