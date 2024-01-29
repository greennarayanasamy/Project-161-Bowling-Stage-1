AFRAME.registerComponent("ball",{
    init:function(){
        this.throwBall();
    },
    throwBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var ball=document.createElement("a-entity");
                ball.setAttribute("geometry",{
                    primitives:"sphere",
                    radius:0.1,
                });
                this.setAttribute("material","color","black");
                var cam=document.querySelector("#camera");
                pos=cam.getAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z,
                });
                var camera=document.querySelector("#camera").object3D;
                var direction=new THREE.Vector3();
                camera.getWorldDirection(direciton);
                ball.setAttribute("velocity",direction.multiplyScalar(-10));
                var seen=document.querySelector("#seen");
                seen.appendChild(ball);
            }
        });
    }
})