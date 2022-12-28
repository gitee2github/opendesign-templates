<script setup lang="ts">
import banner from '@/assets/banner/banner-interaction.png';
import illustration from '@/assets/illustrations/news.png';
import AppContent from '@/components/AppContent.vue';
import BannerLevel2 from '@/components/BannerLevel2.vue';
import { useRouter } from 'vitepress';

const router = useRouter();
const handleNewsClick = () => {
  router.go('/zh/news/20220831');
};
</script>

<template>
  <BannerLevel2
    :background-image="banner"
    background-text="INTERACTION"
    title="新闻"
    :illustration="illustration"
  ></BannerLevel2>

  <AppContent :mobile-top="16">
    <div class="news-list">
      <div class="news-card" @click="handleNewsClick">
        <div class="news-img">
          <img
            src="https://www.openeuler.org/img/banners/20221125%E7%94%9F%E6%80%81%E5%A4%A7%E4%BC%9A.png"
          />
        </div>
        <div class="news-info">
          <p class="news-title">
            欧拉逐梦 引领未来｜openEuler 生态大会将于11月27日重磅启幕
          </p>
          <p class="news-time">2022-11-24</p>
          <p class="news-content">
            openEuler生态大会将推进欧拉技术路线在区域落地，探索openEuler面向服务器、云计算、边缘计算、嵌入式系统等全场景的深度应用，促进技术联创、适配迁移、产业拓展、行业创新，繁荣区域开源开放创新生态。
          </p>
        </div>
      </div>
    </div>
  </AppContent>
</template>

<style lang="scss" scoped>
.news-list {
  display: grid;
  max-width: 1448px;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--o-spacing-h4);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .news-card {
    width: 100%;
    background-color: var(--o-color-bg2);
    box-shadow: var(--o-shadow-l2);
    cursor: pointer;

    .news-img {
      width: 100%;
      height: 188px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    &:hover {
      box-shadow: var(--o-shadow-l2_hover);
      .news-img {
        img {
          transform: scale(1.05);
        }
      }
    }

    .news-info {
      padding: 24px;
      color: var(--o-color-text1);
      .news-title {
        font-weight: 400;
        height: 52px;
        line-height: var(--o-line-height-h7);
        font-size: var(--o-font-size-h7);
        margin-bottom: var(--o-spacing-h10);
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .news-time {
        font-size: var(--o-font-size-text);
        line-height: var(--o-line-height-text);
      }

      .news-content {
        margin-top: var(--o-spacing-h5);
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: var(--o-font-size-text);
        line-height: var(--o-line-height-text);
      }
    }
  }
}
</style>
