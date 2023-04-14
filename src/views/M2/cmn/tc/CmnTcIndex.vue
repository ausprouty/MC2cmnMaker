<script>
import { useShare} from "@/assets/javascript/share.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"

export default {
  methods:{
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    }
  },
  mounted() {
    useRevealMedia()
    localStorage.setItem("lastpage", this.$route.name)
  }
}
</script>
<template>
  <!-- sdcard template from mc2 -->

<div class="page_content" dir="ltr">
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
  <div  class="app-series-header">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/TransferableConcepts.png" class="app-series-header" />
  </div>
  <div>
    可传递的信息
  </div>
  <br />
  <br />
  <!-- begin chapters -->
    <!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc01')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">1 .</div>
                            <div class="chapter_title series ltr">怎样肯定你是一个基督徒</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc02')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">2.</div>
                            <div class="chapter_title series ltr">你如何体验神的慈爱 与赦免</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc03')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">3.</div>
                            <div class="chapter_title series ltr">怎样被圣灵充满</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc04')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">4.</div>
                            <div class="chapter_title series ltr">你怎样才能行在 圣灵之中</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc05')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">5.</div>
                            <div class="chapter_title series ltr">你怎样才能成为一个 富有成果的见证人</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc06')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">6.</div>
                            <div class="chapter_title series ltr">你如何介绍他人 认识基督</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc07')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">7.</div>
                            <div class="chapter_title series ltr">怎样帮助完成大使命</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc08')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">8.</div>
                            <div class="chapter_title series ltr">凭信心爱人</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-tc09')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">9.</div>
                            <div class="chapter_title series ltr">凭信心祷告</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->

   <!-- end chapters -->
  <div>
    <!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
  </div>
</div>
</template>
<!--- Created by capacitor - publishSeries-->
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->