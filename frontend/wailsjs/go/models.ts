export namespace limautil {
	
	export class  {
	    vnl?: string;
	    interface?: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.vnl = source["vnl"];
	        this.interface = source["interface"];
	    }
	}
	export class InstanceInfo {
	    name?: string;
	    status?: string;
	    arch?: string;
	    cpus?: number;
	    memory?: number;
	    disk?: number;
	    dir?: string;
	    network?: [];
	    address?: string;
	    runtime?: string;
	
	    static createFrom(source: any = {}) {
	        return new InstanceInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.status = source["status"];
	        this.arch = source["arch"];
	        this.cpus = source["cpus"];
	        this.memory = source["memory"];
	        this.disk = source["disk"];
	        this.dir = source["dir"];
	        this.network = this.convertValues(source["network"], );
	        this.address = source["address"];
	        this.runtime = source["runtime"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

