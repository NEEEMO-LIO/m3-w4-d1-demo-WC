Vue.component('pricing-card', {
    props: ['title', 'features', 'price', 'unit', 'buttonText'],
    // 按钮是否处于 hover 状态
    data: function () {
      return {
        isHover: false
      };
    },
    // 计算属性：把标题变成全大写
    computed: {
      uppercaseTitle: function () {
        return this.title.toUpperCase();
      }
    },
    template: `
      <div class="card">
        <ul class="card-info card-shadow">
          <!-- 使用计算属性 -->
          <li class="card-header">{{ uppercaseTitle }}</li>
  
          <li
            class="card-item"
            v-for="(feature, index) in features"
            :key="index"
          >
            <span>{{ feature.highlight }}</span> {{ feature.text }}
          </li>
  
          <li class="card-item">
            <h2 class="card-wide">{{ price }}</h2>
            <span class="card-opacity">{{ unit }}</span>
          </li>
  
          <li class="card-btn">
            <button
              class="button"
              :class="{ hover: isHover }"
              @mouseover="isHover = true"
              @mouseleave="isHover = false"
            >
              {{ buttonText }}
            </button>
          </li>
        </ul>
      </div>
    `
  });
  
  new Vue({
    el: '#app',
    data: {
      card: {
        title: 'Gold',        // 原始是 Gold，小写/首字母随便，computed 会转成 GOLD
        features: [
          { highlight: '50GB', text: 'Storage' },
          { highlight: '50', text: 'Emails' },
          { highlight: '50', text: 'Domains' },
          { highlight: 'Endless', text: 'Support' }
        ],
        price: '$ 50',
        unit: 'per month',
        buttonText: 'Sign Up'
      }
    }
  });
  