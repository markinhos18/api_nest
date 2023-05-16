import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get('/address/:address')
  async getAddress(@Param('address') address: string) {
    return await this.appService.getAddress(address);
  }

  @Get('/forecast/:latitude/:longitude')
  async getForecast(
    @Param('latitude') latitude: string,
    @Param('longitude') longitude: string,
  ) {
    return await this.appService.getForecast(latitude, longitude);
  }
}
