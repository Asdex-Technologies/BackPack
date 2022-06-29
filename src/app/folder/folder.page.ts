import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MateriasService } from '../services/materias.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  subjects = this.materias.appPages;
  topics = []; 
  constructor(private activatedRoute: ActivatedRoute, private materias: MateriasService, private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.filterTopic();
  }
  goTo(url: string){
    this.router.navigateByUrl('/folder/'+url);
  }

  filterTopic(){
    this.topics = this.materias.topics.filter(x => x.materia == this.folder);
    console.log('Topics ->',this.topics);
  }
}
