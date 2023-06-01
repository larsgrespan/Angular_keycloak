import { Component } from '@angular/core';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/sso-config';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string='';

  constructor(private oAuthService: OAuthService) {

  }

  ngOnInit(): void{
    this.configureSingleSignOn();
    const userClaim: any= this.oAuthService.getIdentityClaims();
    this.name= userClaim.name ? userClaim.name: "";
  }

  configureSingleSignOn(){
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();


  }

}
