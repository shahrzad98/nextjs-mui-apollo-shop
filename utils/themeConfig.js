import { openModal, setImage } from './vars';
import dynamic from 'next/dynamic';

/**
 * @type import('@digify/theme-kit').ThemeConfig
 */
const themeConfig = {
  apollo: {
    uri: process.env.NEXT_PUBLIC_APOLLO_URL,
    inMemoryCacheConfig: {
      typePolicies: {
        Query: {
          fields: {
            isOpenModal: {
              read() {
                return openModal();
              }
            },
            refundImage: {
              read() {
                return setImage();
              }
            }
          }
        }
      }
    }
  },
  customization: {
    config: {
      themeName: 'fashion-theme'
    },
    schema: {
      colors: {
        primary: {
          type: 'string',
          defaultValue: '1360af'
        },
        secondary: {
          type: 'string',
          defaultValue: '6528cb'
        },
        success: {
          type: 'string',
          defaultValue: '#0f9e68'
        },
        bodyBackground: {
          type: 'string',
          defaultValue: '#f3f3f3'
        },
        style: {
          type: 'string',
          defaultValue: 'light',
          options: [
            {
              key: 'روشن',
              value: 'light'
            },
            {
              key: 'تیره',
              value: 'dark'
            }
          ]
        }
      },
      adBar: {
        isShow: {
          type: 'boolean',
          defaultValue: false
        },
        mode: {
          type: 'string',
          defaultValue: 'text',
          options: [
            {
              key: 'text',
              value: 'text'
            },
            {
              key: 'image',
              value: 'image'
            }
          ]
        },
        content: {
          type: 'string',
          defaultValue: ''
        },
        href: {
          type: 'string',
          defaultValue: ''
        },
        color: {
          type: 'string',
          defaultValue: '#000'
        }
      },
      products: {
        mode: {
          type: 'string',
          defaultValue: 'sort',
          options: [
            {
              key: 'sort',
              value: 'sort'
            },
            {
              key: 'manual',
              value: 'manual'
            }
          ]
        },
        title: {
          type: 'string',
          defaultValue: 'محصولات'
        },
        manualProducts: {
          type: 'string[]',
          defaultValue: [],
          value: []
        },
        sortValue: {
          type: 'string',
          defaultValue: 'NEWEST',
          options: [
            {
              key: 'NEWEST',
              value: 'NEWEST'
            },
            {
              key: 'MOST_SALE',
              value: 'MOST_SALE'
            },
            {
              key: 'MOST_DISCOUNT',
              value: 'MOST_DISCOUNT'
            }
          ]
        }
      },
      home: {
        sections: {
          type: 'component[]',
          defaultValue: [
            {
              key: 'AD_BAR'
            },
            {
              key: 'HEADER'
            },

            {
              key: 'BANNER'
            },
            {
              key: 'HOT_OFFER'
            },
            {
              key: 'CATEGORIES'
            },
            {
              key: 'PRODUCTS'
            },
            {
              key: 'BLOG'
            },
            {
              key: 'UTILS'
            },
            {
              key: 'FOOTER'
            }
          ],
          options: [
            {
              key: 'AD_BAR',
              value: dynamic(() =>
                import('../src/components/home/topNavbar/index')
              )
            },
            {
              key: 'HEADER',
              value: dynamic(() => import('../src/components/Layout/Header'))
            },
            {
              key: 'BANNER',
              value: dynamic(() => import('../src/components/home/Banner'))
            },
            {
              key: 'CATEGORIES',
              value: dynamic(() => import('../src/components/home/Categories'))
            },
            {
              key: 'PRODUCTS',
              value: dynamic(() => import('../src/components/home/products'))
            },
            {
              key: 'HOT_OFFER',
              value: dynamic(() => import('../src/components/hotOffer'))
            },
            {
              key: 'BLOG',
              value: dynamic(() => import('../src/components/home/blog'))
            },
            {
              key: 'UTILS',
              value: dynamic(() => import('../src/components/home/utils'))
            },
            {
              key: 'FOOTER',
              value: dynamic(() => import('../src/components/home/footer'))
            }
          ]
        }
      },
      layout: {
        // header: {
        //   type: 'string',
        //   defaultValue: 'static',
        //   options: [
        //     {
        //       key: 'پس زمینه ثابت',
        //       value: 'static',
        //       additionalData: {
        //         image: '/images/static-header.png'
        //       }
        //     },
        //     {
        //       key: 'پس زمینه شیشه ای',
        //       value: 'glass',
        //       additionalData: {
        //         image: '/images/glass-header.png'
        //       }
        //     },
        //     {
        //       key: 'بدون پس زمینه',
        //       value: 'transparent',
        //       additionalData: {
        //         image: '/images/transparent-header.png'
        //       }
        //     }
        //   ]
        // },
        navigation: {
          type: 'checkbox',
          defaultValue: ['HOME', 'SELLER', 'CONTACTUS'],
          options: [
            {
              value: 'ABOUT',
              key: 'درباره ما',
              additionalData: {
                link: '/information/about-us',
                isRequired: false
              }
            },
            {
              value: 'CONTACTUS',
              key: 'تماس با ما ',
              additionalData: {
                link: '/information/contact-us',
                isRequired: false
              }
            },
            {
              value: 'BLOG',
              key: ' بلاگ',
              additionalData: {
                link: '/blogs',
                isRequired: false
              }
            }
          ]
        }
      },
      banner: {
        isFullPage: {
          type: 'boolean',
          defaultValue: false
        },
        autoPlay: {
          type: 'boolean',
          defaultValue: false
        },
        slidesSpeed: {
          type: 'string',
          defaultValue: '2',
          options: [
            {
              key: 'خیلی سریع',
              value: '2'
            },
            {
              key: 'سریع',
              value: '3'
            },
            {
              key: 'متوسط',
              value: '5'
            },
            {
              key: 'آرام',
              value: '7'
            }
          ]
        },
        selectedBanner: {
          type: 'number',
          defaultValue: 0
        },
        banners: {
          type: 'object[]',
          defaultValue: [
            {
              image: 'images/banner-placeholder.png',
              link: '',
              align: 'center',
              isShowHeading: true,
              headingText: 'عنوان بنر',
              isShowDescription: true,
              descriptionText: 'متن مورد نظر شما برای بنر اینجا قرار میگیره.',
              isShowButton: true,
              buttonText: 'متن دکمه'
            }
          ],
          options: [
            {
              key: 'image',
              value: 'images/banner-placeholder.png'
            },
            {
              key: 'link',
              value: ''
            },
            {
              key: 'align',
              value: 'center'
            },
            {
              key: 'isShowHeading',
              value: true
            },
            {
              key: 'headingText',
              value: 'عنوان بنر'
            },
            {
              key: 'isShowDescription',
              value: true
            },
            {
              key: 'descriptionText',
              value: 'متن مورد نظر شما برای بنر اینجا قرار میگیره.'
            },
            {
              key: 'isShowButton',
              value: true
            },
            {
              key: 'buttonText',
              value: 'متن دکمه'
            }
          ]
        }
      },
      hotOffer: {
        style: {
          type: 'string',
          defaultValue: 'style-1',
          options: [
            {
              key: 'استایل اول',
              value: 'style-1',
              additionalData: {
                image: '/images/styleOne.png'
              }
            },
            {
              key: 'استایل دوم',
              value: 'style-2',
              additionalData: {
                image: '/images/styleTwo.png'
              }
            },
            {
              key: 'استایل سوم',
              value: 'style-3',
              additionalData: {
                image: '/images/styleThree.png'
              }
            }
          ]
        },
        color: {
          type: 'string',
          defaultValue: '#000'
        }
      },
      productCard: {
        addToBasketShow: {
          type: 'boolean',
          defaultValue: false
        }
      },
      footer: {
        information: {
          type: 'checkbox',
          defaultValue: ['PHONE', 'CALL_WE'],
          options: [
            {
              value: 'ADDRESS',
              key: 'آدرس'
            },
            {
              value: 'PHONE',
              key: 'شماره تماس'
            },
            {
              value: 'CALL_WE',
              key: 'تماس با ما'
            },
            // {
            //   value: 'SHOPPING_HELP',
            //   key: 'راهنما خرید'
            // },
            {
              value: 'RETURN_CONDITIONS',
              key: 'شرایط بازگشت'
            }
          ]
        },
        social: {
          type: 'object[]',
          defaultValue: [],
          options: [
            {
              show: true,
              key: 'اینستاگرام',
              value: 'insta',
              id: 1
            },
            {
              show: true,
              key: 'تلگرام',
              value: 'tel',
              id: 2
            }
          ]
        },
        instagramIsShow: {
          type: 'boolean',
          defaultValue: false
        },
        instagramHref: {
          type: 'string',
          defaultValue: ''
        },
        telegramIsShow: {
          type: 'boolean',
          defaultValue: false
        },
        telegramHref: {
          type: 'string',
          defaultValue: ''
        },
        whatsappIsShow: {
          type: 'boolean',
          defaultValue: false
        },
        whatsappHref: {
          type: 'string',
          defaultValue: ''
        },
        linkedinIsShow: {
          type: 'boolean',
          defaultValue: false
        },
        linkedinHref: {
          type: 'string',
          defaultValue: ''
        },
        twitterIsShow: {
          type: 'boolean',
          defaultValue: false
        },
        twitterHref: {
          type: 'string',
          defaultValue: ''
        },
        facebookIsShow: {
          type: 'boolean',
          defaultValue: false
        },
        facebookHref: {
          type: 'string',
          defaultValue: ''
        }
      },
      category: {
        style: {
          type: 'string',
          defaultValue: '4 تایی',
          options: [
            {
              name: '4 تایی',
              image: '/images/grid4.png',
              count: 4
            },
            {
              name: '6 تایی',
              image: '/images/grid6.png',
              count: 6
            }
          ]
        },
        count: {
          type: 'number',
          defaultValue: 4
        },
        categories: {
          type: 'object[]',
          defaultValue: [...new Array(4)].map((a, i) => ({
            id: i + 1,
            image: '',
            categoryId: ''
          })),
          options: [
            {
              key: 'image',
              value: ''
            },
            {
              key: 'categoryId',
              value: ''
            }
          ]
        },
        name: {
          type: 'string',
          defaultValue: 'دسته بندی‌ها'
        },
        isShow: {
          type: 'boolean',
          defaultValue: true
        },
        isShowName: {
          type: 'boolean',
          defaultValue: true
        }
      },
      utils: {
        isShow: {
          type: 'boolean',
          defaultValue: false
        },
        utilsPart: {
          type: 'checkbox',
          defaultValue: [
            'send-nationwide',
            'payment',
            'product-return-guarantee'
          ],
          options: [
            {
              key: 'ارسال به سراسر کشور',
              value: 'send-nationwide',
              logo: 'sendNationwideSvg'
            },
            {
              key: 'تحویل سریع',
              value: 'fast-delivery',
              logo: 'fastDeliverySvg'
            },
            {
              key: 'پرداخت در محل',
              value: 'payment',
              logo: 'paymentSvg'
            },
            {
              key: 'ضمانت بازگشت کالا',
              value: 'product-return-guarantee',
              logo: 'productGuaranteeSvg'
            },
            {
              key: 'تضمین کیفیت',
              value: 'quality-guarantee',
              logo: 'qualityGuaranteeSvg'
            },
            {
              key: 'پشتیبانی آنلاین',
              value: 'online-support',
              logo: 'onlineSupportSvg'
            },
            {
              key: 'نماد اعتماد',
              value: 'e-namad',
              logo: 'enamadSvg'
            }
          ]
        }
      }
    }
  }
};
export default themeConfig;
