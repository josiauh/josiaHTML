/*
josiaHTML
Copyright (C) 2023 freesmart

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

function makeDiscWidget(id) {
    return `<iframe src="https://discord.com/widget?id=${id}&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`
}

/*
//commented because deprecated (apparently)
var DWProto = Object.create(HTMLElement.prototype)
Object.defineProperty(DWProto, "serverID", {});

DWProto.createdCallback = function() {
    this.innerHTML = makeDiscWidget(this.serverID)
}

var DiscordWidget = document.registerElement('discWidget', {
    prototype: DWProto,
});
*/

class DiscordWidget extends HTMLElement {
    connectedCallback() {
      this.innerHTML = makeDiscWidget(this.getAttribute("serverID"));
    }
}
customElements.define('discord-widget', DiscordWidget);