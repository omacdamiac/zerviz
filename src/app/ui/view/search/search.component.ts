import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SelectNsModel } from "src/app/commons/components/select/model/select-ns.model";
import { DATAMAPPER } from "src/app/core/models/mapper";
import { DataPresenterService } from "src/app/data/repository/data-presenter.service";
import { AthleteService } from "src/app/data/services/athlete.service";
import { saveAs } from "file-saver";
import { COUNTRY } from "src/app/core/models/country";
import { PLAYER } from "src/app/core/models/player";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  selectCountry = new SelectNsModel.SelectClass("País", "country", true, null);
  selectSport = new SelectNsModel.SelectClass("Deporte", "sport", true, true);
  selectPlayer = new SelectNsModel.SelectClass("Atleta", "player", true, true);
  setDataPlayer: DATAMAPPER.MAPPER_PLAYER;
  setDataPlayerView: boolean;
  constructor(
    private dataPresenterService: DataPresenterService,
    private athleteService: AthleteService
  ) {
    // this.selectAnio.options = this.mapper(this.dataPresenterService.countries);
    this.selectSport.options = [];
    this.setDataPlayerView = false;
  }

  ngOnInit() {
    this.createForm();
    this.getListCountrie();
  }
  private createForm() {
    this.form = new FormGroup({});
  }
  get getForm() {
    return this.form.controls;
  }
  private getListCountrie(): void {
    this.athleteService.getCountrie().subscribe({
      next: (res: COUNTRY[]) => {
        this.selectCountry.options = res;
        this.getListSport();
      },
    });
  }
  public enableSport() {
    this.getForm.sport.reset();
    this.getForm.player.reset();
    this.selectPlayer.options = [];
    this.selectSport.disabled = null;
  }

  private getListSport(): void {
    this.athleteService.getSport().subscribe({
      next: (res) => {
        this.selectSport.options = res;
      },
    });
  }
  public setPlayer() {
    const dataForm = this.form.value;
      this.getListPlayer(dataForm);
      this.setDataPlayerView = false;
  }
  private getListPlayer(dataForm): void {
    this.athleteService.getPlayer().subscribe({
      next: (res: PLAYER[]) => {
        let arrPlayer = [];
        res.filter((item: any) => {
          if (
            item.country_code === Number(dataForm.country) &&
            item.sport_code === Number(dataForm.sport)
          ) {
            arrPlayer.push(item);
          }
        });

        this.selectPlayer.options = [...[{id:0}],...arrPlayer];
        this.getForm.player.reset();

        this.selectPlayer.disabled = null;

      },
    });
  }
  public dowloadImage(url: string, name: string) {
    saveAs(url, name + ".png");
  }
  public setData() {
    const cmbPlayer = Number(this.getForm.player.value);
    this.selectPlayer.options.filter((e) => {
      if (e.id === cmbPlayer) {
        this.setDataPlayer = e;
      }
    });
    this.setDataPlayerView = true;
  }
}
