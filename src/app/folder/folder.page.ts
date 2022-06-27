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
  constructor(private activatedRoute: ActivatedRoute, private materias: MateriasService, private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goTo(url: string){
    this.router.navigateByUrl('/folder/'+url);
  }

}
