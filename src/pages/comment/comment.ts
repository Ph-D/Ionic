import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup }  from '@angular/forms';
import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentForm: FormGroup;
  dish: Dish;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  private formbuilder: FormBuilder
) {
  this.commentForm = this.formbuilder.group({
    rating: '5',
    comment: '',
    author: ['', Validators.required],
    date: new Date().toISOString()

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss(){
    this.viewCtrl.dismiss(this.commentForm.value);
    
  }

  onSubmit(){
    this.viewCtrl.dismiss(this.commentForm.value);
  }

}
