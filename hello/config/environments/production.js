module.exports = function() {
    this.set('view engine', 'ejs');

    this.use(poweredBy('Locomotive'));
    this.use(express.logger());
    this.use(express.static(__dirname + '/../../public'));
    this.use(express.cookieParser());
    this.use(express.bodyParser());
    this.use(express.session({ secret: 'keyboard cat' }));
    this.use(passport.initialize());
    this.use(passport.session());
    this.use(this.router);
  };

