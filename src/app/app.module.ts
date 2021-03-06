import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AboutPage } from '../pages/about/about';
import { Camera }  from '@ionic-native/camera';
import { MenuPage } from '../pages/menu/menu';
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { ReservationPage } from '../pages/reservation/reservation';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { RegisterPage } from '../pages/register/register';
import { baseURL } from '../shared/baseurl';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    RegisterPage,
    CommentPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    EmailComposer,
    DishProvider,
    Network,
    SocialSharing,
    Camera,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL},
    FavoriteProvider
  ]
})
export class AppModule {}
