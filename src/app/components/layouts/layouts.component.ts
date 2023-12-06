import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavHeaderComponent } from "./sidenav-header/sidenav-header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.css',
    imports: [RouterModule, RouterOutlet, NavbarComponent, SidenavHeaderComponent, FooterComponent]
})
export class LayoutsComponent {

}
